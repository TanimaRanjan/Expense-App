import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import numeral from 'numeral'

test('Should correct render ExpensesSummary with 1 expense ', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should correct render ExpensesSummary with multiple expenses ', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={2353435}/>)
    expect(wrapper).toMatchSnapshot()
})