import React, { Component } from 'react';

export default ChildComponent => {
    return class extends Component {
        hasError() {
            return true;
        }

        errorBlock() {
            return (
                <div>Load resource failed</div>
            )
        }

        render() {
            return (
                this.hasError() ? <ChildComponent /> : this.errorBlock()
            )
        }
    }
};