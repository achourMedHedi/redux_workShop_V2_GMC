import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , compose , applyMiddleware } from 'redux' // create store 
import { Provider} from 'react-redux' // provider 
import reducers from './reducers'
import Application from './Application/application';
import AppWithRedux from './AppWithRedux/application';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const store = createStore(
    reducers,
    composeEnhancers()
   )
   

ReactDOM.render(
    <Provider store={store} >
        {/* <Application /> */}
        <AppWithRedux />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
