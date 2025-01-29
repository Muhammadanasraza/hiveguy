 
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AuthPage from './Pages/AuthPage'
import ForgotPassword from './Components/ForgotPage'
import ProductListing from './Pages/ProductListing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="authpage" element={<AuthPage />} />
          <Route path="/authpage/forgotpage" element={<ForgotPassword />} />
          <Route path="/productlisting" element={<ProductListing />} />

        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App;
