import './App.css';
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import Blog from './components/blog/Blog'
import RootPage from './components/rootPage/RootPage'
import TaskManager from './components/taskManager/TaskManager'
import NewTaskPage from './components/taskManager/newTaskPage/NewTaskPage'

import { BrowserRouter, Route } from 'react-router-dom'

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <div className="page">
                    <Header />
                    <div className="content">
                        <Route exact path="/" render={() => <RootPage />} />
                        <Route path="/main" render={() => <Main />} />
                        <Route path="/blog" render={() => <Blog blogPage={props.state.blogPage} />} />
                        <Route path="/taskmanager" render={() => <TaskManager />} />
                        <Route path="/createtask" render={() => <NewTaskPage />} />
                    </div>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
