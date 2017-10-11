import constants from '../constants';

const articlesReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.GET_ARTICLES:
            return {
                sortBy: action.sortBy,
                articles: action.articles,
                source: action.source,
                ...state
            };
        default:
            return state;
    }
};

export default articlesReducer;