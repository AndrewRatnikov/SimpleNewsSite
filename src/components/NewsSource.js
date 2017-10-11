import React from 'react';

const NewsSource = ({ source, onClickHandler }) => {
    return (
        <div className="news-sources__item n-source n-source--active">
            <h5 className="n-source__title" onClick={() => onClickHandler(source.id)}>{source.name}</h5>
            <p>{source.description}</p>
            <p className="n-source__labels">
                <span className="n-source__lang">lang: {source.language}</span>
                <span className="n-source__country">country: {source.country}</span>
            </p>
        </div>
    );
};

export default NewsSource;