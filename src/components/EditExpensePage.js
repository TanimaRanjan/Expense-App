import React from 'react'
import { connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense , removeExpense} from '../actions/expenses';

// refactor editexpese page to be a class based componenet
// setup match 

export class EditExpensePage extends React.Component {
    onSubmit = ( expense ) => {
        this.props.dispatch(editExpense(this.props.expense.id, expense))
        this.props.history.push('/')
    }

    onRemove =  ( expense ) => {
        this.props.dispatch(removeExpense({id: this.props.expense.id}))
        this.props.history.push('/')
    }
}

const EditExpensePage = (props) =>  {
    return (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                    console.log(expense)
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
            }}
            />
            <button onClick={(e) => {
                props.dispatch(removeExpense({id: props.expense.id}))
                props.history.push('/')
            }}>Remove</button>
    </div>
    )
}

const mapDistpatchToProp = () => {
    return {
        editExpense: (expense)
    }
    
}

const mapStateToProp = (state, props) => {
    return { 
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProp)(EditExpensePage);