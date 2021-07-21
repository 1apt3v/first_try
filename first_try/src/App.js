import './App.css';
import HeaderContainer from "./components/header/HeaderContainer"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import BlogContainer from './components/blog/BlogContainer'
import RootPage from './components/rootPage/RootPage'
// import TaskManagerContainer from './components/taskManager/TaskManagerContainer'
import NewListPage from './components/taskManager/newListPage/NewListPage'
import NewTaskPage from './components/taskManager/newTaskPage/NewTaskPage'
// import SocialPage from './components/social/SocialPage/SocialPage';
import Login from './components/social/Login/Login';
// import MessengerContainer from './components/social/Messenger/MessengerContainer'

import { Route, withRouter } from 'react-router-dom'
import React, { Suspense } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';


import store from "./redux/redux-store"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { withSuspense } from './hoc/withSuspense';

const SocialPage = React.lazy(() => import('./components/social/SocialPage/SocialPage'))
const TaskManagerContainer = React.lazy(() => import('./components/taskManager/TaskManagerContainer'))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div>
                <div className="page">
                    <HeaderContainer />
                    <div className="content">
                        <Route exact path="/" render={() => <RootPage />} />
                        <Route path="/main" render={() => <Main />} />
                        <Route path="/blog" render={() => <BlogContainer />} />

                        <Route path="/taskmanager/" render={withSuspense(TaskManagerContainer)} />
                        <Route path="/createlist" render={() => <NewListPage />} />
                        <Route path="/createtask" render={() => <NewTaskPage />} />


                        <Route path="/social/" render={withSuspense(SocialPage)} />

                        <Route path="/login/" render={() => <Login />} />

                    </div>
                    <Footer />
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App)

const MainApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <AppContainer />
            </BrowserRouter>
        </Provider>
    )
}



export default MainApp
