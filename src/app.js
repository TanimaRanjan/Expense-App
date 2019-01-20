import React from 'react'
import ReactDOM from 'react-dom'
import {Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from  './actions/expenses'
// import { setTextFilter, sortbyAmount, sortbyDate, setStartDate, setEndDate } from './actions/filters'
import  getVisibleExpenses  from './selectors/expense'

import '../node_modules/normalize.css/normalize.css'
import '../public/styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import {firebase} from './firebase/firebase'

const store = configureStore();
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

var hasRendered = false;

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
        })
        
    } else {
        renderApp()
        history.push('/')
    }
})

