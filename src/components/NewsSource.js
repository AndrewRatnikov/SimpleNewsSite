import React from 'react';

const NewsSource = ({ source }) => {
    console.log(source);
    return (
        <div className="news-sources__item n-source n-source--active">
            <h5 className="n-source__title">{source.name}</h5>
            <p>{source.description}</p>
            <p className="n-source__labels">
                <span className="n-source__lang">lang: {source.language}</span>
                <span className="n-source__country">country: {source.country}</span>
            </p>
        </div>
    );
};

export default NewsSource;