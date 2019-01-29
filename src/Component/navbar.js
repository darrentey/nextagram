import React from "react";
import { Button } from "reactstrap";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import ModalLogin from "./ModalLogin";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      modalOpen: false
    };
  }
  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <div>
        {this.state.modalOpen ? (
          <ModalLogin modalOpen={this.state.modalOpen} toggle={this.toggle} />
        ) : null}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NEXTAGRAM</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users/1">Profile Page</NavLink>
              </NavItem>
              <NavItem>
                <Button onClick={this.toggle}>Login</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
