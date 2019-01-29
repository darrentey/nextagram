class NameForm extends React.Component {
  state = {
    name: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("A name was submitted: " + this.state.name);
  };

  handleInput = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.name}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
