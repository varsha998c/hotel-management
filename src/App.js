import "./App.css";
import Header from "./components/general/Header";
import "../src/assets/css/style.css";
import Footer from "./components/general/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/screens/SearchPage";
import HomePage from "./components/screens/HomePage";
import MainRouter from "./components/routing/routers/MainRouter";

function App() {
    return (
        <>
            <Router>
                {/* <Header />
                <HomePage />
                <Footer /> */}
                <MainRouter />
            </Router>
        </>
    );
}

export default App;
