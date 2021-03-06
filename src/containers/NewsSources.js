import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollArea from 'react-custom-scrollbars';

import { getNewsSources, getArticlesFromSource, setFilterItems } from '../controllers';
import NewsSource from '../components/NewsSource';

class NewsSources extends Component {
    componentDidMount() {
        getNewsSources();
    }

    sourceOnclickHandler({ id, sortBysAvailable }) {
        setFilterItems(sortBysAvailable);
        getArticlesFromSource(id);
    }

    render() {
        return (
            <div className="news-sources">
                <h1 className="news-sources__title">News Sources</h1>
                <div className="news-sources__list">
                    <ScrollArea>
                        {this.props.sources.map(source => {
                            return <NewsSource key={source.id}
                                               source={source}
                                               currentSource={this.props.article.source}
                                               onClickHandler={this.sourceOnclickHandler}
                            />
                        })}
                    </ScrollArea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sources: state.sourcesReducer,
        article: state.articlesReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSources);