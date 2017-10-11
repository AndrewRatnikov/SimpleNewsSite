import React, { Component } from 'react';
import ScrollArea from 'react-custom-scrollbars';

export default class ArticlesList extends Component {
    render() {
        return (
            <div className="news-articles">
                <h1 className="news-articles__title">Articles List</h1>
                <ul className="news-articles__filter">
                    <li className="filter-item filter-item--active">Top</li>
                    <li className="filter-item">Latest</li>
                    <li className="filter-item">Popular</li>
                </ul>
                <div className="news-articles__list">
                    <ScrollArea>
                        <div className="news-articles__item article">
                            <img src="article.urlToImage" alt="Preview" className="article__img"/>
                            <div>
                                <h3 className="article__title"><a href='article.url'>article.title</a></h3>
                                <p className="article__author"><b>Author:</b> article.author</p>
                                <p className="article__description">article.description</p>
                                <p className="article__date"><b>Date:</b> article.publishedAt</p>
                            </div>
                        </div>
                        <div className="news-articles__item article">
                            <img src="article.urlToImage" alt="Preview" className="article__img"/>
                            <div>
                                <h3 className="article__title"><a href='article.url'>article.title</a></h3>
                                <p className="article__author"><b>Author:</b> article.author</p>
                                <p className="article__description">article.description</p>
                                <p className="article__date"><b>Date:</b> article.publishedAt</p>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        )
    }
}