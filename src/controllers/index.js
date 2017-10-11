import axios from 'axios';

import { NewsSourcesToStore } from '../actions'
import store from '../store';

export const getNewsSources = () => {
    axios.get('https://newsapi.org/v1/sources')
        .then((response) => {
            console.log(response.data);
            store.dispatch( NewsSourcesToStore(response.data.sources) );
        });
};