import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    let hour = this.state.time.getHours();
    let minute = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      this.state.time.getDay()
    ];

    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <div className="timeDiv">
            <div>Time:</div>
            <div>
              {hour}:{minute}:{seconds} PDT
            </div>
          </div>
          <div className="timeDiv">
            <div>Date:</div>
            <div>{this.state.time.toDateString()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
