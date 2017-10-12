import React from 'react';

const NewsSource = ({ source, currentSource, onClickHandler }) => {
    return (
        <div className={source.id == currentSource ? "news-sources__item n-source n-source--active" : "news-sources__item n-source"}>
            <h5 className="n-source__title" onClick={() => onClickHandler(source)}>{source.name}</h5>
            <p>{source.description}</p>
            <p className="n-source__labels">
                <span className="n-source__lang">lang: {source.language}</span>
                <span className="n-source__country">country: {source.country}</span>
            </p>
        </div>
    );
};

export default NewsSource;