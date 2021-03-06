import React, {Component} from 'react';

function FormatDate(props) {
  return (
    props.date.toLocaleTimeString()

  );
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <FormatDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;
