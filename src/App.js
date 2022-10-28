import "./App.css";
import Header from "./components/general/Header";
import Home from "./components/screens/Home";
import "../src/assets/css/style.css";
import Banner from "./components/includes/Banner";

function App() {
    return (
        <>
            <Header />
            <Banner />
            <Home />
        </>
    );
}

export default App;
