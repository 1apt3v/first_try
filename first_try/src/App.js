import './App.css';
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import Blog from './components/blog/Blog'
import RootPage from './components/rootPage/RootPage'
import TaskManager from './components/taskManager/TaskManager'
import NewListPage from './components/taskManager/newListPage/NewListPage'
import NewTaskPage from './components/taskManager/newTaskPage/NewTaskPage'
import SocialPage from './components/social/SocialPage/SocialPage';
// import MessengerContainer from './components/social/Messenger/MessengerContainer'

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
                        
                        <Route path="/taskmanager" render={() => <TaskManager taskManager={props.state.taskManager} />} />
                        <Route path="/createlist" render={() => <NewListPage />} />
                        <Route path="/createtask" render={() => <NewTaskPage />} />

                        <Route path="/social/" render={() => <SocialPage />} />
                        
                    </div>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
