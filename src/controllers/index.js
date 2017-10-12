import axios from 'axios';

import { newsSourcesToStore, articlesToStore, filtersToStore, articlesErrorToStore } from '../actions'
import store from '../store';

const API_KEY = '5f1a272a422747cc890a8f8fa9ca0380';

export const getNewsSources = () => {
    axios.get('https://newsapi.org/v1/sources')
        .then(response => {
            store.dispatch( newsSourcesToStore(response.data.sources) );
        });
};

export const getArticlesFromSource = (source, filter) => {
    const articles = JSON.parse(localStorage.getItem(source));
    const min20 = 20 * 60 * 1000;
    if (articles && articles.filter === filter) {
        const oldDate = (new Date(articles.date)).getTime();
        const currentDate = (new Date()).getTime();
        if (currentDate - oldDate < min20) store.dispatch( articlesToStore(articles.data) );
    } else {
        const url = `https://newsapi.org/v1/articles?source=${source}${filter ? `&sortBy=${filter}` : ''}&apiKey=${API_KEY}`;
        axios.get(url)
            .then(response => {
                store.dispatch(articlesToStore(response.data));
                const newArticles = JSON.stringify({data: response.data, date: new Date(), filter});
                localStorage.setItem(source, newArticles);
            })
            .catch(error => {
                store.dispatch(articlesErrorToStore())
            });
    }
};

export const setFilterItems = filters => {
    store.dispatch( filtersToStore(filters) );
};