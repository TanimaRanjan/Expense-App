import React from 'react'
import {connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expense'
// Stateless Function 
const ExpenseList = (props) => (

        <div>
            <h2>Expense List</h2>
            {props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} /> 
                
            })}
            
        </div>
)

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filters)
    }
}

const ConnectExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectExpenseList;