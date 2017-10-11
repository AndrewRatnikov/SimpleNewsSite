import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import NewsSources from './NewsSources';
import ArticlesBlock from './ArticlesBlock';

import '../assets/styles/main.scss';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="main-container">
                    <NewsSources />
                    <ArticlesBlock />
                </div>
            </Provider>
        )
    }
}