import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expense from '../fixtures/expenses'
import moment from 'moment'

test('Should render Expense From Correctly ', ()=> {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

// Should renender ExpenseForm with Expense data

test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expense[1]} />)
    expect(wrapper).toMatchSnapshot()
})


test('Should render error for invalid for submission', ()=> {
    const wrapper = shallow(<ExpenseForm  />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})


test('Should set description on input change', () => {
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm  />)
    wrapper.find('input').at(0).simulate('change', {
        target: {value }
    })
    expect(wrapper.state('description')).toBe(value)
})


test('Should set Note on text area change', () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: {value}
        
    })
    expect(wrapper.state('note')).toBe(value)

})


test('Should set amount if valid input', () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)

})


test('Should not set amount if invalid input ', () => {
    const value = '12.122'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')

})


test('Should call OnSubmit prop for valid form submission ', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expense[0]}  onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('')
    //onSubmitSpy()
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expense[0].description,
        note:expense[0].note,
        amount:expense[0].amount,
        createdAt:(expense[0].createdAt.valueOf())
    })
})

test('Should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    // wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set Calendar Focused is set properly', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toEqual(focused)

})