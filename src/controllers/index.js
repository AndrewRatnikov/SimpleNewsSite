import axios from 'axios';

import { newsSourcesToStore, articlesToStore } from '../actions'
import store from '../store';

const API_KEY = '5f1a272a422747cc890a8f8fa9ca0380';

export const getNewsSources = () => {
    axios.get('https://newsapi.org/v1/sources')
        .then(response => {
            store.dispatch( newsSourcesToStore(response.data.sources) );
        });
};

export const getArticlesFromSource = source => {
    axios.get(` https://newsapi.org/v1/articles?source=${source}&apiKey=${API_KEY}`)
        .then(response => {
            if (response.data.status === 'ok') {
                store.dispatch( articlesToStore(response.data) )
            } else {
                // TODO: add dispatch for error
            }
        })
};