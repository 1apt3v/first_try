import './App.css';
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom'


function App() {
    return (
        <BrowserRouter>
            <div>
                <div className="page">
                    <Header />
                    <Route path="/main" component={Main} />
                    <Route path="/dialogs" component={Dialogs} />
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
