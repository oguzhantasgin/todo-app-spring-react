import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar";
import ToDo from "./components/ToDo";
import HomePage from "./components/HomePage"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddToDo from "./components/todo/AddToDo";
import {Provider} from "react-redux";
import store from "./store";
import {Helmet} from 'react-helmet';
import UpdateToDo from "./components/todo/UpdateToDo";
import RegisterUser from "./components/user/RegisterUser";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <NavBar/>
                    <Helmet>
                        <style>{'body { background-color: #e1e2de; }'}</style>
                    </Helmet>

                    <Route exact path = "/sign-up" component = {RegisterUser}/>

                    <Route exact path = "/" component = {HomePage}/>

                    <Route exact path = "/todo" component={ToDo}/>

                    <Route exact path = "/addToDo" component={AddToDo}/>

                    <Route exact
                           path="/updateToDo/:td_id"
                           component={UpdateToDo}
                    />
                </div>


            </Router>
        </Provider>
    );
}

export default App;
