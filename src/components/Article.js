import React from 'react';

const Article = ({ article }) => {
    const date = new Date(article.publishedAt);
    const day = date.getDate().length == 1 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return (
        <div className="news-articles__item article">
            <div className="article__img">
                <img src={article.urlToImage} alt="Preview"/>
            </div>
            <div>
                <h3 className="article__title"><a href={article.url} target="_blank">{article.title}</a></h3>
                <p className="article__author"><b>Author:</b> {article.author}</p>
                <p className="article__description">{article.description}</p>
                <p className="article__date"><b>Date:</b> {day}.{month}.{year}</p>
            </div>
        </div>
    );
};

export default Article;