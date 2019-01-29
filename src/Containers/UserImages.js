import React, { Component } from "react";
import axios from "axios";
import Image from "react-graceful-image";
import Loader from "react-loader-spinner";

class UserImages extends Component {
  state = {
    images: [],
    isLoading: true
  };

  componentDidMount() {
    axios
      .get(
        `https://insta.nextacademy.com/api/v1/images?userId=${
          this.props.userId
        }`
      )
      .then(result => {
        console.log(result.data);

        // If successful, we do stuffs with 'result'
        this.setState({ images: result.data, isLoading: false });
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }
  render() {
    return (
      <div>
        <h1>User Images</h1>

        <ul>
          {this.state.images.map((image, index) => (
            <li key={index}>
              {this.state.isLoading ? (
                <Loader type="Plane" color="orange" height={80} width={80} />
              ) : null}
              <Image src={image} className="rounded-circle w-25" alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserImages;
