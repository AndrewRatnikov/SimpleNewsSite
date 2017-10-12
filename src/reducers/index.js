import { combineReducers } from 'redux';

import articlesReducer from './newsArticles';
import sourcesReducer from './newsSources';
import filtersReducer from './filtersReducer';

const reducer = combineReducers({
    articlesReducer,
    sourcesReducer,
    filtersReducer
});

export default reducer;
