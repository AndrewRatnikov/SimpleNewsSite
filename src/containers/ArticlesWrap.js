import React, { Component } from 'react';

export default ChildComponent => {
    return class extends Component {
        hasError() {
            return this.props.source.error;
        }

        errorBlock() {
            return (
                <div className="error-block">Load resource failed.</div>
            )
        }

        render() {
            return (
                this.hasError() ? this.errorBlock() : <ChildComponent {...this.props} />
            )
        }
    }
};