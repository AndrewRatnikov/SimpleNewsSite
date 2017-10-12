import constants from '../constants';

const articlesReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.GET_ARTICLES:
            return {
                ...state,
                sortBy: action.sortBy,
                articles: action.articles,
                source: action.source,
                error: false
            };
        case constants.ARTICLES_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return {
                ...state,
                articles: []
            };
    }
};

export default articlesReducer;