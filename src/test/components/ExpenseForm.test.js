import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expense from '../fixtures/expenses'

test('Should render Expense From Correctly ', ()=> {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

// Should renender ExpenseForm with Expense data

test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expense[1]} />)
    expect(wrapper).toMatchSnapshot()
})
