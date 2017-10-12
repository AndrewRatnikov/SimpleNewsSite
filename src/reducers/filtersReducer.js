import constants from '../constants';

const filtersReducer = (state = [], action) => {
    switch (action.type) {
        case constants.SET_FILTERS:
            return action.filters;
        default:
            return state;
    }
};

export default filtersReducer;