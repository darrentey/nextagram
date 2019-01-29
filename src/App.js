import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import HomePage from "./Pages/Homepage";
import UserProfilePage from "./Pages/UserProfilePage";
import NavBar from "./Component/navbar";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        console.log(result.data);

        // If successful, we do stuffs with 'result'
        this.setState({ users: result.data });
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  render() {
    return (
      <div>
        <NavBar />

        <Route
          exact
          path="/"
          component={props => <HomePage users={this.state.users} {...props} />}
        />
        <Route path="/users/:id" component={UserProfilePage} />
      </div>
    );
  }
}
export default App;
