import axios from 'axios';

import { newsSourcesToStore, articlesToStore } from '../actions'
import store from '../store';

export const getNewsSources = () => {
    axios.get('https://newsapi.org/v1/sources')
        .then(response => {
            store.dispatch( newsSourcesToStore(response.data.sources) );
        });
};

export const getArticlesFromSource = source => {
    axios.get(`articles?source=${source}&apiKey=${API_KEY}`) // TODO: add API_KEY
        .then(response => {
            if (response.data.status === 'ok') {
                store.dispatch( articlesToStore(response.data) )
            } else {
                // TODO: add dispatch for error
            }
        })
};