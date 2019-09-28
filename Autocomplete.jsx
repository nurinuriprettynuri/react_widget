import React from "react";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.names,
      inputVal: ""
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ inputVal: e.target.value });
  }

  match() {
    let selectedWords = [];
    let inputValue = this.state.inputVal;
    if (inputValue === 0) {
      selectedWords = this.props.names;
    } else {
      selectedWords = this.props.names.filter(
        name =>
          inputValue.toLowerCase() ===
          name.slice(0, inputValue.length).toLowerCase()
      );
    }
    return selectedWords;
  }

  render() {
    let nameList = this.match().map(name => <li>{name}</li>);
    console.log(nameList);
    return (
      <div>
        <h1>Autocomplete</h1>
        <div className="autocomplete">
          <input value={this.state.inputVal} onChange={this.update} />
          <ul>{nameList}</ul>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
