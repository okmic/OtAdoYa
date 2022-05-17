import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasketPage from './pages/BasketPage'
import Main from './pages/Main'
import ProductDescription from './pages/ProductDescription'

export default function App() {
  
  return <BrowserRouter>
    <div className="wrapperApp">
      <Routes>
        <Route path='dip_pastry_shop/' element={<Main />} />
        <Route path='dip_pastry_shop/:id' exact element={<ProductDescription />} />
        <Route path='dip_pastry_shop/basket' exact element={<BasketPage />} />
      </Routes>
    </div>
  </BrowserRouter>
}