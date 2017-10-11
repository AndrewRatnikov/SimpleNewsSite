import constants from '../constants';

export const NewsSourcesToStore = sources => {
    return {
        type: constants.GET_NEWS_SOURCES,
        sources
    };
};