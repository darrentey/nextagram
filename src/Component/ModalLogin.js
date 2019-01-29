import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import SignUp from "./signupForm";
import Axios from "axios";

class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      email: "",
      password: "",
      isLoading: false
    };
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
      isLoading: true
    });
    // console.log(this.state);
    // Axios({
    //   method: "post",
    //   url: "https://insta.nextacademy.com/api/v1/login",
    //   data: {
    //     email: "",
    //     password: ""
    //   }
    // })
    //   .then(resp => {
    //     console.log(resp);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  signupToggle = () => {
    this.setState({ signup: !this.state.signup });
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.props.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        {this.state.signup ? (
          <SignUp
            signup={this.state.signup}
            signupToggle={this.signupToggle}
            toggle={this.props.toggle}
          />
        ) : (
          <Modal
            isOpen={this.props.modalOpen}
            toggle={this.props.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.props.toggle} close={closeBtn}>
              Login
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                  />
                  <FormText color="muted">
                    New member?{" "}
                    <Button color="primary" onClick={this.signupToggle}>
                      Sign Up
                    </Button>{" "}
                  </FormText>
                </FormGroup>
              </Form>
            </ModalBody>
            <div className="d-inline">
              <div className="float-left p-3">
                <Button color="secondary" onClick={this.props.toggle}>
                  Forgot password
                </Button>
              </div>
              <div className="float-right p-3">
                <Button
                  color="primary"
                  disabled={this.state.isLoading}
                  onClick={e => this.onSubmit(e)}
                >
                  {this.state.isLoading ? "Logging In..." : "Log In"}
                </Button>{" "}
                <Button color="secondary" onClick={this.props.toggle}>
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default ModalLogin;
