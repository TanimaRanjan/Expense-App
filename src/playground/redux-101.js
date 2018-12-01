import { createStore } from 'redux';
console.log("Hello REDUX")


// Action Generator  - Function that return action object

const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        // incrementBy: incrementBy
        incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT', 
    decrementBy
})
const resetcount = () => ({
    type: 'RESET' 
})
const setCount = ({count }) => ({
    type: 'SET' ,
    count
})

// Reducer 
// 1. Reducer is a pre function. It only depends on the input - Only uses state and action. Also Does not change anything outside the scope either. 
// 2. Never change state or action
const countReducer = (state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT' :
        return {
            count: state.count + action.incrementBy
        }
        case 'DECREMENT' :
        return {
            count: state.count - action.decrementBy
        }
        case 'RESET' :
        return {
            count: 0
        }
        case 'SET':
        return {
            count: action.count
        }
        default: 
            return state;
    }
}

// Create store expects function as its 1st argument
// Function's 1st arg is prevState 
// You can set a default state too
const store = createStore(countReducer)

// Monitors when state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount())
store.dispatch(resetcount())
store.dispatch(decrementCount({ decrementBy:10 }))
store.dispatch(decrementCount())
store.dispatch(setCount({count:101 }))
