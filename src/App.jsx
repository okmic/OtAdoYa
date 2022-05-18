import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasketPage from './pages/BasketPage'
import ContactsPage from './pages/ContactsPage'
import Main from './pages/Main'
import ProductDescription from './pages/ProductDescription'
import ReviewsPage from './pages/ReviewsPage'

export default function App() {
  
  return <BrowserRouter>
    <div className="wrapperApp">
      <Routes>
        <Route path='/dip_pastry_shop'  element={<Main />} />
        <Route path='/dip_pastry_shop/:id'  element={<ProductDescription />} />
        <Route path='/dip_pastry_shop/basket'  element={<BasketPage />} />
        <Route path='/dip_pastry_shop/reviews'  element={<ReviewsPage />} />
        <Route path='/dip_pastry_shop/contacts'  element={<ContactsPage />} />
        <Route path='/dip_pastry_shop/about'  element={<ContactsPage />} />
      </Routes>
    </div>
  </BrowserRouter>
}