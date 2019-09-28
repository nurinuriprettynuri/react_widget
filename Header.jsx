import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let idx = this.props.idx;
    let klass = this.props.selected === idx ? "show" : "";
    return (
      <li className={klass}>
        <h1 onClick={() => this.props.select(idx)}>{this.props.title}</h1>
      </li>
    );
  }
}

export default Header;
