import React from 'react'
import { connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense , startRemoveExpense} from '../actions/expenses';

// refactor editexpese page to be a class based componenet
// setup match 

export class EditExpensePage extends React.Component {
    onSubmit = ( expense ) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onRemove =  (  ) => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }
    render() {
        return (
        <div>
            <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
        </div>
        )
    }
}


const mapDistpatchToProps = (dispatch, props)  => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

const mapStateToProp = (state, props) => ({
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
})

export default connect(mapStateToProp, mapDistpatchToProps)(EditExpensePage);