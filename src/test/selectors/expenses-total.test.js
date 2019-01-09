import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return zero if no expenses ', () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})

test('Should correctly add up a single expense  ', () => {
    const res = selectExpensesTotal([expenses[1]])
    expect(res).toBe(expenses[1].amount)
})

test('Should correctly add up multiple expenses  ', () => {
    const res = selectExpensesTotal(expenses)
    expect(res).toBe(20395)
})