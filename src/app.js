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

import './firebase/firebase'

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



// const redux = require('./playground/hoc.js')
// store.dispatch(addExpense({description:"Coffee", amount:3990, note:"Gas bill for Nov 2018", createdAt:4100}))
// store.dispatch(addExpense({description:"Cell Bill", amount:3050, note:"Gas bill for Nov 2018", createdAt:4600}))
// store.dispatch(addExpense({description:"Electric Bill", amount:2350, note:"Gas bill for Nov 2018", createdAt:1100}))

// store.dispatch(setTextFilter('bill'))
// setTimeout(() => {
//     store.dispatch(setTextFilter('water'))
// }, 3000)

// const date =  moment()
// console.log(date.format())