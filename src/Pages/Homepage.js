import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Col, Row } from "reactstrap";

class HomePage extends Component {
  render() {
    const styles = {
      color: "#000080",
      padding: 15
    };

    return (
      <div>
        <h1 style={styles}>Home Page</h1>

        <Row className="d-flex">
          {this.props.users.map((user, index) => (
            <Col key={index} sm="4">
              <Link to={`users/${user.id}`}>
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  <CardImg
                    top
                    width="100%"
                    src={user.profileImage}
                    className="rounded-circle w-25, center"
                    alt=""
                  />
                  <CardTitle className="text-center">
                    {user.id}: {user.username}
                  </CardTitle>
                </Card>
              </Link>
              <br />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default HomePage;
