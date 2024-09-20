import Navbar from "./components/navigation/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter} from "react-router-dom";
import Content from "./components/Content.jsx";
import swal from "sweetalert";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Content/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App
