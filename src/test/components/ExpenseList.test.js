import React from 'react'
import { shallow } from 'enzyme'
import  ExpenseList  from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'

test('Should render ExpenseList with expenses', () => {
    // const wrapper = shallow(<ExpenseList expenses={expenses} />)
    // expenses(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render Expense List with empty message' , () => {
    // const wrapper = shallow(<ExpenseList expenses={[]} />)
    // expenses(wrapper).toMatchSnapshot()
})