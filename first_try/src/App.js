import './App.css';
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"

function App() {
    return (
        <div>
            <div className="page">
            <Header />
            <Main />
            <Footer />
            </div>
        </div>
    );
}

export default App;
