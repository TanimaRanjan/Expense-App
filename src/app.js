import React from 'react'
import ReactDOM from 'react-dom'
import {Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from  './actions/expenses'
// import { setTextFilter, sortbyAmount, sortbyDate, setStartDate, setEndDate } from './actions/filters'
import  getVisibleExpenses  from './selectors/expense'

import '../node_modules/normalize.css/normalize.css'
import '../public/styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import {firebase} from './firebase/firebase'

// import './playground/promises'

const store = configureStore();

const state = store.getState()

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpense)
//     // console.log(state.filters)
// })

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('Log in')
    } else {
        console.log('Log out')
    }
})

