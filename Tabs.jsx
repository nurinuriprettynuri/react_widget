import React from "react";
import Header from "./Header";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.select = this.select.bind(this);
  }

  select(idx) {
    this.setState({ selected: idx });
  }

  render() {
    let result = this.props.tabs.map((tab, idx) => {
      return (
        <Header
          select={this.select}
          idx={idx}
          title={tab.title}
          selected={this.state.selected}
        />
      );
    });
    return (
      <div>
        <h1>Tabs</h1>
        <div className="tabsDiv">
          <ul className="tabs">{result}</ul>
          <div>{this.props.tabs[this.state.selected].content}</div>
        </div>
      </div>
    );
  }
}

export default Tabs;
