import constants from '../constants';

export const newsSourcesToStore = sources => {
    return {
        type: constants.GET_NEWS_SOURCES,
        sources
    };
};

export const articlesToStore = ({ articles, sortBy, source }) => {
    return {
        type: constants.GET_ARTICLES,
        articles,
        sortBy,
        source
    }
};

export const articlesErrorToStore = () => {
    return {
        type: constants.ARTICLES_ERROR,
        error: true
    };
};

export const filtersToStore = filters => {
    return {
        type: constants.SET_FILTERS,
        filters
    };
};