
import {createStore, combineReducers} from 'redux'
import uuid from 'uuid/v4'
import moment from 'moment'

// ADD_EXPENSE 
// Need to return someithng. - You can replace return with ({}) 
const addExpense = ({description='', note='', amount=0, createdAt=0} ={}) => ({
    type: 'ADD_EXPENSE', 
    expense: {
        id:uuid(), 
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE', 
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
})


const expensesReducerDefaultState = [];

const expensesReducer = (state=expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE' :
            return [
                ...state, 
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id;
            }) 
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return  state;
    }
}


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
})


// SORT_BY_DATE
const sortbyDate = () => ({
    type:'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortbyAmount = () => ({
    type:'SORT_BY_AMOUNT'
})


// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type:'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type:'SET_END_DATE',
    endDate

})


const filterReducerDefaultState = {
    text:'',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
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

        default: {
            return state
        }
    }
}

// Get visisble expenses 
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
         const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}


const store = createStore(
    combineReducers({
            expenses : expensesReducer,
            filters: filtersReducer
        })
    ) 

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
    console.log(state.filters)
})


const expenseOne = store.dispatch(addExpense({description:'Rent', amount:20000, createdAt:1000}))
const expenseTwo =store.dispatch(addExpense({description:'Coffee', amount:300, note:"Starbucks Blonde Roast", createdAt:2100}))
store.dispatch(addExpense({description:'Cake', amount:400}))

// console.log(expenseTwo.expense.id)
//store.dispatch(removeExpense({id :expenseOne.expense.id}))

store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}))
store.dispatch(setTextFilter(''))

// store.dispatch(setTextFilter(''))

store.dispatch(sortbyAmount())
// store.dispatch(sortbyDate())

// store.dispatch(setStartDate(-900))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1200))
// store.dispatch(setEndDate())


const demoState = {
    expenses: [
        {   id:uuid(), 
            description:'Jan Rent',
            note: 'This was the final payment for the address', 
            amount: 54500, 
            createdAt: 0
        }], 
        filters : {
            text:'rent',
            sortBy: 'amount', //date or amount
            startDate: undefined,
            endDate: undefined
        }
}



// const store = createStore(reducer)

// const user = {
//     name:'Tanima',
//     age:36
// }
// console.log({...user, location:'New York'})
// console.log({...user, location:'New York', age:35})