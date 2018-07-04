import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorInfo: {
        componentStack: ''
      }
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{
            whiteSpace: 'pre-wrap'
          }}
          >
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
