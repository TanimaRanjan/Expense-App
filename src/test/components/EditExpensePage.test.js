import React from 'react'
import { shallow } from 'enzyme'
import EditExpensePage from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'


let editExpense, removeExpense, history, wrapper 

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push : jest.fn()}
    wrapper = shallow(<EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history} 
            expense={expenses[2]}/>)
})
test('Should render EditExpensePage properly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should render EditExpensePage properly', () => {
    // expect(wrapper).toMatchSnapshot()
})

test('Should render EditExpensePage properly', () => {
    // expect(wrapper).toMatchSnapshot()
})

