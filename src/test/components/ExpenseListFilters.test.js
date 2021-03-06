import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    ></ExpenseListFilters>)
})

test('Should render ExpenseListFilter correctly ', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilter with alt data correctly ', () => {
    wrapper.setProps({
        filters : altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should handle text change ExpenseListFilter correctly ', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: { value  }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should sort by date in  ExpenseListFilter correctly ', () => {
    const value = 'date'
    wrapper.setProps({
        filters : altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value  }
    })
    expect(sortByDate).toHaveBeenCalled()
})


test('Should sort by date in  ExpenseListFilter correctly ', () => {
    const value = 'amount'
    wrapper.setProps({
        filters : filters
    })
    wrapper.find('select').simulate('change', {
        target: { value  }
    })
    expect(sortByAmount).toHaveBeenCalled()
})


test('Should handle date change  ', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Should handle date focus  ', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
