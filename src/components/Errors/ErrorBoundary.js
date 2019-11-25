import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStatefromError(error) {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      <h1>Something went wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}
