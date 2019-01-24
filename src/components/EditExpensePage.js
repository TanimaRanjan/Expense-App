import React from 'react'
import { connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense , startRemoveExpense} from '../actions/expenses';

// refactor editexpese page to be a class based componenet
// setup match 

export class EditExpensePage extends React.Component {
    onSubmit = ( expense ) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/dashboard')
    }

    onRemove =  (  ) => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className='button-layout__remove' onClick={this.onRemove}>Remove Expense</button>
                </div>
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