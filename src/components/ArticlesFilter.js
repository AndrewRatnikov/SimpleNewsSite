import React, { Component } from 'react';

export default class ArticlesFilter extends Component {
    render() {
        return (
            <ul className="news-articles__filter">
                <li className="filter-item filter-item--active">Top</li>
                <li className="filter-item">Latest</li>
                <li className="filter-item">Popular</li>
            </ul>
        );
    }
}