import React, { Component } from 'react'

class ErrorBoundry extends Component {
   
    state = {
        hasError: false
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good.</h1>
        }
    }

}

export default ErrorBoundry