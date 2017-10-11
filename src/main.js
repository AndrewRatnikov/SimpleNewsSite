import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';

const renderApp = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

renderApp(App);

if ( module.hot ) {
    module.hot.accept('./containers/App', () => { renderApp(App) });
}