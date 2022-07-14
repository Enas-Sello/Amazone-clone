import logger from 'use-reducer-logger';
import React, { useState, useReducer } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../network/axiosInstansce';
import reducer from '../network/FecthingData';

function Home() {
  //   const [products, setproduct] = useState([]);
  const [{ products, loading, error }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    axiosInstance
      .get('/products')
      .then((res) => {
        console.log(res);
        dispatch({ type: 'FETCH-REQUEST' });
        dispatch({ type: 'FETCH-SUCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FEACH-FALE' });
      });
  }, []);

  return (
    <>
      <h1>Feather Products</h1>
      <div className="products">
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div> {error}</div>
        ) : (
          products.map((product) => (
            <div className="product" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.id}`}>
                  <p>{product.title}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <p>Rating{product.rating.rate}</p>
                <p>in stock {product.rating.count}</p>
                <button> Add to cart </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;
