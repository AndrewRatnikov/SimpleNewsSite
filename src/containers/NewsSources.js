import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollArea from 'react-custom-scrollbars';

import { getNewsSources } from '../controllers';
import NewsSource from '../components/NewsSource';

class NewsSources extends Component {
    componentDidMount() {
        getNewsSources();
    }

    render() {
        return (
            <div className="news-sources">
                <h1 className="news-sources__title">News Sources</h1>
                <div className="news-sources__list">
                    <ScrollArea>
                        {this.props.sources.map(source => <NewsSource key={source.id} source={source} />)}
                    </ScrollArea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sources: state.sourcesReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSources);