import React, { Component } from 'react';
import ScrollArea from 'react-custom-scrollbars';

import { getArticlesFromSource } from '../controllers';
import ArticlesWrap from './ArticlesWrap';
import ArticlesFilter from '../components/ArticlesFilter';
import Article from '../components/Article';

class ArticlesList extends Component {
    onclickFilterHandler(filter) {
        if (filter !== this.props.source.sortBy) {
            getArticlesFromSource(this.props.source.source, filter)
        }
    }

    render() {
        const souceKey = this.props.source.source || 'articles';
        return ([
            <ArticlesFilter key="filter" filters={this.props.filters} activeFilter={this.props.source.sortBy} filterOnclick={this.onclickFilterHandler.bind(this)} />,
            <div key={souceKey} className="news-articles__list">
                <ScrollArea>
                    {this.props.source.articles.map((article, id) => <Article key={id} article={article} />)}
                </ScrollArea>
            </div>
        ])
    }
}

export default ArticlesWrap(ArticlesList);