import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      hitungMundur: 100,
      tampilWaktu: true,
      tampilWaktuMundur: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.waktuMundur(), 1000);
    this.timerID = setInterval(() => this.jam(), 1000);
  }

  jam() {
    this.setState({
      time: new Date(),
    });
  }

  waktuMundur() {
    this.setState({
      hitungMundur: this.state.hitungMundur - 1,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  showTime() {
    if (this.state.hitungMundur > 0) {
      return (
        <>
          <h2>Sekarang Jam {this.state.time.toLocaleTimeString("en-US")}</h2>
          <h2>Hitung Mundur : {this.state.hitungMundur}</h2>
        </>
      );
    }
  }

  hideTime() {
    if (this.state.hitungMundur === 0) {
      this.setState({
        tampilWaktu: false,
      });
    }
  }

  render() {
    return <div className="timer">{this.showTime()}</div>;
  }
}

export default Timer;