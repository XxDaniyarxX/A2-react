import React, {Component} from 'react'

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 2,
      text: 'hi',
      message: 'hello'
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  messageGet = () => {
    this.setState({
      message: this.state.text,
      text: ''
    });

    const input = prompt('Введите число, пожалуйста');
    const value = parseFloat(input);
    this.setState((prevState) => ({
      count: prevState.count * value
    }));
  }

  render() {
    return (
      <div style={{ backgroundColor: 'blue', borderRadius: '5px', marginTop: '100px' }}>
        <h1 style={{ color: 'red' }}>
          My Component
        </h1>
        <h2>{this.state.count}</h2>
        <button style={{ backgroundColor: 'yellow' }} onClick={this.increment}>add</button>
        <button style={{ backgroundColor: 'orange' }} onClick={this.decrement}>minus</button>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.messageGet}>Send</button>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default MyComponent;