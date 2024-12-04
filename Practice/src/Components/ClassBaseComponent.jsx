import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ClassBaseComponent extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

// Entry point: Render the component
ReactDOM.createRoot(document.getElementById("root")).render(<ClassBaseComponent />);