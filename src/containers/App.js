import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import '../assets/styles/main.scss';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <h1>React works!!!</h1>
            </Provider>
        )
    }
}