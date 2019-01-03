import React from 'react'
import { shallow } from 'enzyme'
import AddExpensePage from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'



let addExpense, history, wrapper 

beforeEach(() => {
    const onSubmit = jest.fn();
    const history = { push : jest.fn()}
    // const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})
test('Should render AddExpensePage properly', () => {
    // expect(wrapper).toMatchSnapshot()
})


test('Should handle OnSubmit ', () => {
    // wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    // expect(history.push).toHaveBeenLastCalledWith('/')
    // expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})