import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Form
} from "reactstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: ""
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
      username: ""
    });

    console.log(this.state);
    Axios({
      method: "post",
      url: "https://insta.nextacademy.com/api/v1/users/new",
      data: {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      }
    })
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.props.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <Modal
          isOpen={this.props.signup}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle} close={closeBtn}>
            Sign Up
          </ModalHeader>
          <ModalBody>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder=""
                      value={this.state.email}
                      onChange={e => this.change(e)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder=""
                      value={this.state.password}
                      onChange={e => this.change(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="exampleAddress"
                  placeholder=""
                  value={this.state.username}
                  onChange={e => this.change(e)}
                />

                <FormText color="muted">
                  Already a member?{" "}
                  <Button color="primary" onClick={this.props.signupToggle}>
                    Log In
                  </Button>{" "}
                </FormText>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => this.onSubmit(e)}>
              Sign Up
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
