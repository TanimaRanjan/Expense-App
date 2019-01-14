import React from 'react'
import { shallow } from 'enzyme'
import AddExpensePage from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'



let startAddExpense, history, wrapper 

beforeEach(() => {
    const startAddExpense = jest.fn();
    const history = { push : jest.fn()}
    // wrapper 0= shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})
test('Should render AddExpensePage properly', () => {
    //  expect(wrapper).toMatchSnapshot()
})


test('Should handle OnSubmit ', () => {
    //  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    //  expect(history.push).toHaveBeenLastCalledWith('/')
    //  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})