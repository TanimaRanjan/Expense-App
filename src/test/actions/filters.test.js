import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, sortbyDate, sortbyAmount} from '../../actions/filters'
import moment from 'moment'
test('Should return object with set Start Date ', () => {

    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})

test('Should return object with set End Date ', () => {
    const action = setEndDate(moment(100));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(100)
    })
})


test('Should return Set Text Filter Object  ', () => {
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'Rent'
    })
})


test('Should return Set Text Filter Object with default value  ', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})


test('Should return Sort By Date Object  ', () => {
    expect(sortbyDate()).toEqual({ type:'SORT_BY_DATE' })
})


test('Should return Sort by Amount  ', () => {
    expect(sortbyAmount()).toEqual({ type:'SORT_BY_AMOUNT' })
})

