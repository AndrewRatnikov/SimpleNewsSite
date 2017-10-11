import React from 'react';

import ArticleList from './ArticleList';

const ArticlesBlock = () => {
    return (
        <div className="news-articles">
            <h1 className="news-articles__title">Articles List</h1>
            <ArticleList />
        </div>
    )
};

export default ArticlesBlock;