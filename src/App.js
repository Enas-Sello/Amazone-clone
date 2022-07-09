import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import './index.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
