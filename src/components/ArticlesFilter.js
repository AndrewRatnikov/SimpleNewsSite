import React, { Component } from 'react';

export default class ArticlesFilter extends Component {
    render() {
        return (
            <ul className="news-articles__filter">
                {this.props.filters.map(filter => <li key={filter}
                                                      className={this.props.activeFilter === filter ? "filter-item filter-item--active" : "filter-item" }
                                                      onClick={() => this.props.filterOnclick(filter)}>{filter}</li>)}
            </ul>
        );
    }
}