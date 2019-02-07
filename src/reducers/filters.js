import moment from 'moment'

const filterReducerDefaultState = {
    text:'',
    sortBy: 'date', //date or amount
    category:0,
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}


const filtersReducer = (state=filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER' :
            return {
                ...state , text:action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state, sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state, sortBy:'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state, startDate:action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state, endDate:action.endDate
            }
        case 'SET_CATEGORY_FILTER': 
            return {
                ...state, category:action.category
            }
        default: {
            return state
        }
    }
}

export default filtersReducer;
