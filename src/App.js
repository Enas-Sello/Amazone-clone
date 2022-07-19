import ProHome from './pages/ProHome';
import ProductDetails from './pages/ProductDetails';
import BackTop from './Components/backTop/BackTop';
// import Registration from './pages/Signup/Signup';
// import Login from './pages/Login/Login';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CartPage from './pages/Cart/CartPage.jsx';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
function App() {
  return (
    <Router>
      <div className="d-flex flex-column main">
        <Header />
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />

              <Route path="/" element={<ProHome />} />
            </Routes>
          </Container>
        </main>
        <BackTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
