import React from "react";
import UserImages from "./../Containers/UserImages";

class UserProfilePage extends React.Component {
  render() {
    // let user = this.props.users.find(
    //   user => user.id === this.props.match.params.id
    // );

    return (
      <>
        <h1>User Profile Page of </h1>

        <UserImages userId={this.props.match.params.id} />
      </>
    );
  }
}

export default UserProfilePage;
