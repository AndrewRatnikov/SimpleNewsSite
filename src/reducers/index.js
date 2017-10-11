import { combineReducers } from 'redux';

import articlesReducer from './newsArticles';
import sourcesReducer from './newsSources';

const reducer = combineReducers({
    articlesReducer,
    sourcesReducer
});

export default reducer;
