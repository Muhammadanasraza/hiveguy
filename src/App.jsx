import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router';  // FIXED IMPORT
import Header from './Components/Header'
import Footer from './Components/Footer'
import AuthPage from './Pages/AuthPage'
import ForgotPassword from './Components/ForgotPage'
import ProductListing from './Pages/ProductListing'
import AddToCart from './Pages/AddToCart';

function App() {
  return (
    <BrowserRouter> {/* Use HashRouter here if Vercel gives issues */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/authpage/forgotpage" element={<ForgotPassword />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
