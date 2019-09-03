import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from './component/Login.js';
import {TodoApp} from './TodoApp.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('email=camilo@biciroute.com','camilo');
    }

    render() {

        const LoginView = () => (
            <div>{localStorage.getItem('isLoggedIn')!=null ? <TodoApp/> : <Login/>} </div>
        );

        const TodoView = () => (
            <div>
                {localStorage.getItem('isLoggedIn')!=null ? <TodoApp/>: <div></div>}
            </div>
        );

        const NoMatchView = ({ location }) => (
            <div>
              <h3>No match for <code>{location.pathname}</code></h3>
            </div>
        )

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoView}/>
                    </div>
                </div>
            </Router>
        );
    }

    

}

export default App;
