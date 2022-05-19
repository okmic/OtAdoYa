import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import BasketPage from './pages/BasketPage'
import ContactsPage from './pages/ContactsPage'
import Main from './pages/Main'
import ProductDescription from './pages/ProductDescription'
import ReviewsPage from './pages/ReviewsPage'

export default function App() {
  
  return <BrowserRouter>
    <div className="wrapperApp">
      <Routes>
        <Route path='/OtAdoYa'  element={<Main />} />
        <Route path='/OtAdoYa/:id'  element={<ProductDescription />} />
        <Route path='/OtAdoYa/basket'  element={<BasketPage />} />
        <Route path='/OtAdoYa/reviews'  element={<ReviewsPage />} />
        <Route path='/OtAdoYa/contacts'  element={<ContactsPage />} />
        <Route path='/OtAdoYa/about'  element={<AboutPage />} />
      </Routes>
    </div>
  </BrowserRouter>
}