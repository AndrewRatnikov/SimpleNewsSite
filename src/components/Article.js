import React from 'react';

const Article = ({ article }) => {
    return (
        <div className="news-articles__item article">
            <img src={article.urlToImage} alt="Preview" className="article__img"/>
            <div>
                <h3 className="article__title"><a href={article.url}>{article.title}</a></h3>
                <p className="article__author"><b>Author:</b> {article.author}</p>
                <p className="article__description">{article.description}</p>
                <p className="article__date"><b>Date:</b> {article.publishedAt}</p>
            </div>
        </div>
    );
};

export default Article;