import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MoviesList from './container/movies_list';
import store from './store';

ReactDOM.render(
        <Provider store={store}>
            <MoviesList />
        </Provider>, document.getElementById('root'));


