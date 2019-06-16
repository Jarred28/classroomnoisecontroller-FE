import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Classrooms from "./components/Classrooms.js";
import "./App.css";

axios.defaults.baseURL =
  process.env.API_URL || "https://noise-controller.herokuapp.com/";

class App extends Component {
  logout = e => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <header>
          <button type="button" onClick={this.logout}>
            Logout
          </button>
        </header>
        <Switch>
          <Route path="/signup" render={props => <Signup {...props} />} />
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route path="/classrooms" component={Classrooms} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
