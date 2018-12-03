import selectExpenses from '../../selectors/expense'
import moment from 'moment'
import expense from '../fixtures/expenses'


test('Should filter by Text value', () => {
    const filters = {
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined,
    }
    const result = selectExpenses(expense, filters)
    expect(result).toEqual(
        [expense[2], expense[1], expense[0]]
    )
})


test('Should filter by Start Date ', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(323456800000),
        endDate:undefined,
    }
    const result = selectExpenses(expense, filters)
    expect(result).toEqual(
        [expense[2], expense[1]]
    )
})


test('Should filter by End Date ', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(323456800000),
    }
    const result = selectExpenses(expense, filters)
    expect(result).toEqual(
        [expense[1], expense[0]]
    )
})


test('Should filter by Start and End Date ', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(323456800000),
        endDate:moment(323456800000),
    }
    const result = selectExpenses(expense, filters)
    expect(result).toEqual(
        [ expense[1]]
    )
})



test('Should filter by Start and End Date ', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(323456800000),
        endDate:moment(323456800000),
    }
    const result = selectExpenses(expense, filters)
    expect(result).toEqual(
        [ expense[1]]
    )
})



test('Should Sort by Amount ', () => {
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined,
    }
    const result = selectExpenses(expense, filters)
    expect(result).toEqual(
        [expense[1],expense[2], expense[0]]
    )
})


test('Should sort by Date ', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined,
    }
    const result = selectExpenses(expense, filters)
    expect(result).toEqual(
        [ expense[2], expense[1],expense[0]]
    )
})