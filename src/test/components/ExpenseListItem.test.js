import React from 'react'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'


test('Should render Expense List Item ', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})