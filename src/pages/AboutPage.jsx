import '../App.css'
import Header from "../components/Header/Header";
import About from "../components/About/About";


export default function AboutPage () {

    return <>
        <Header />
        <div className="wrapperMain">
            <About />
        </div>
    </>
}