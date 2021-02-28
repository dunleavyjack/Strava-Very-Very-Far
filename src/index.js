import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import AppRouter from './router/AppRouter';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
        <AppRouter />
    </Provider>
    , document.getElementById("root"));