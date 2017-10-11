import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import NewsSources from './NewsSources';
import ArticlesList from './ArticlesList';

import '../assets/styles/main.scss';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="main-container">
                    <NewsSources />
                    <ArticlesList />
                </div>
            </Provider>
        )
    }
}