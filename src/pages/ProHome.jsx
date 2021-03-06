import React, { useReducer, useEffect } from "react";
import "../index.css";
import axiosInstance from "../network/axiosInstansce";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
import reducer from "../network/FecthingData";
import logger from "use-reducer-logger";
import { Helmet } from 'react-helmet-async';

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Rating from "../Components/Rating/Rating";
import { addProduct } from "../Redux/cartRedux";
import { useDispatch } from "react-redux";

function ProHome() {
    const Dispatch = useDispatch();
    const [{ data: products, loading, error }, dispatch] = useReducer(
        logger(reducer),
        {
            products: [],
            loading: true,
            error: "",
        }
    );
    useEffect(() => {
        axiosInstance
            .get("/products")
            .then((res) => {
                console.log(res);
                dispatch({ type: "FETCH-REQUEST" });
                dispatch({ type: "FETCH-SUCESS", payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: "FEACH-FALE", payload: err.message });
            });
    }, []);
    const handleAddToCart = () => {
        Dispatch(addProduct({products }));
    };
    return (
        <>
            <Helmet>
                <title>Amazon</title>
            </Helmet>
            <h1>Feather Products</h1>
            <div className="products">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error variant="danger">{error}</Error>
                ) : (
                    <Row>
                        {products.map((product) => (
                            <Col
                                key={product.id}
                                sm={6}
                                md={4}
                                lg={3}
                                className="mb-3 "
                            >
                                <Card
                                    className="shadow border-0"
                                    style={{ height: "100%" }}
                                >
                                    <Link to={`/product/${product.id}`}>
                                        <img
                                            className="card-img-top"
                                            src={product.image}
                                            alt={product.title}
                                        />
                                    </Link>
                                    <Card.Body
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Link to={ `/product/${ product.id }` }>
                                            
                                            <Card.Title>
                                                {product.title}
                                            </Card.Title>
                                        </Link>
                                        <Rating
                                            rating={product.rating.rate}
                                            Reviews={product.rating.count}
                                        />
                                        <Card.Text
                                            style={{
                                                fontSize: "28px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            ${product.price}
                                        </Card.Text>
                                        <Button
                                            className="bg-warning text-dark mt-auto shadow-sm"
                                            style={{
                                                border: "none",
                                                fontSize: "20px",
                                            }}
                                            onClick={handleAddToCart}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </>
    );
}

export default ProHome;
