import '../App.css';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';

export default function Main() {
    return <>
        <Header />
        <div className="wrapperMain">
            <NavBar />
            <Products />
        </div>
    </>
}