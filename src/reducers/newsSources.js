import constants from '../constants';

const sourcesReducer = (state = [], action) => {
    switch (action.type) {
        case constants.GET_NEWS_SOURCES:
            return state.concat(action.sources);
        default:
            return state;
    }
};

export default sourcesReducer;