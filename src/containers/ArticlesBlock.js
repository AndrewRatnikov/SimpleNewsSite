import React from 'react';
import { connect } from 'react-redux';

import ArticleList from './ArticleList';

const ArticlesBlock = props => {
    return (
        <div className="news-articles">
            <h1 className="news-articles__title">Articles List</h1>
            <ArticleList {...props} />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        source: state.articlesReducer,
        filters: state.filtersReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesBlock);