import React from 'react'
import { shallow } from 'enzyme'
import EditExpensePage from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'


let editExpense, removeExpense, history, wrapper 

beforeEach(() => {
    const editExpense = jest.fn();
    const removeExpense = jest.fn();
    const history = { push : jest.fn()}
    const wrapper = shallow(<EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history} 
            expense={expenses[2]}/>)
})
test('Should render EditExpensePage properly', () => {
    // expect(wrapper).toMatchSnapshot()
})

test('Should render EditExpensePage properly', () => {
    // expect(wrapper).toMatchSnapshot()
})

test('Should render EditExpensePage properly', () => {
    // expect(wrapper).toMatchSnapshot()
})

