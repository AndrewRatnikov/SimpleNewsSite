import constants from '../constants';

const articlesReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.GET_ARTICLES:
            return {
                ...state,
                sortBy: action.sortBy,
                articles: action.articles,
                source: action.source
            };
        default:
            return {
                ...state,
                articles: []
            };
    }
};

export default articlesReducer;