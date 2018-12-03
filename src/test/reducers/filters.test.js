import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('Should return default filter values ', ()=> {
    const state = filterReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')

    })
})



test('Should set sort by to amount ', ()=> {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})



test('Should set sort by to date ', ()=> {
    const currentState = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }

    const state = filterReducer(currentState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})




test('Should set filter text ', ()=> {
    const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text:'Rent'})
    expect(state).toEqual({
        text:'Rent',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})




test('Should set start date ', ()=> {
    const startDt = moment()
    const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate:startDt})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:startDt,
        endDate:moment().endOf('month')
    })
})





test('Should set end date ', ()=> {
    const endDt = moment()
    const state = filterReducer(undefined, {type: 'SET_END_DATE', endDate:endDt})
    expect(state.endDate).toBe(endDt)
 
})
