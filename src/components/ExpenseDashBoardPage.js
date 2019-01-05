import 'react-dates/initialize';
import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilters></ExpenseListFilters>
        <ExpenseList></ExpenseList>
    </div>
)

export default ExpenseDashBoardPage;