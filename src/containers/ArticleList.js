import React, { Component } from 'react';
import ScrollArea from 'react-custom-scrollbars';

import ArticlesWrap from './ArticlesWrap';
import ArticlesFilter from '../components/ArticlesFilter';
import Article from '../components/Article';

class ArticlesList extends Component {
    render() {
        console.log(this.props);
        return ([
            <ArticlesFilter key="filter" />,
            <div key="articles" className="news-articles__list">
                <ScrollArea>
                    {this.props.source.articles.map(article => <Article article={article} />)}
                </ScrollArea>
            </div>
        ])
    }
}

export default ArticlesWrap(ArticlesList);