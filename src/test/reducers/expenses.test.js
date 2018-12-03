import expense from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'
import moment from 'moment'

test('Remove expense by ID', () => {
    const result = expensesReducer(expense, {type:'REMOVE_EXPENSE', id:'1'})
    expect(result).toEqual(
        [expense[1],expense[2]]
    )
})

test('Remove expense by ID that doesnt exist', () => {
    const result = expensesReducer(expense, {type:'REMOVE_EXPENSE', id:'5'})
    expect(result).toEqual(
        [...expense]
    )
})



test('Add expense ', () => {
    const expenseAdd = {
        id:'4',
        description:'Brunch',
        note:'Brunch',
        amount:4000,
        createdAt:moment(723456700000)
    }
    const action = {type:'ADD_EXPENSE', expense:expenseAdd}
    const result = expensesReducer(expense, action)
    expect(result).toEqual(
        [...expense,
        action.expense]
    )
})



test('Edit expense by ID ', () => {
    const action = {
            type:'EDIT_EXPENSE', 
            id:expense[0].id, 
            updates : {
                amount:27000
            }
        }
    const result = expensesReducer(expense, action)
    expect(result[0]).toEqual(
            {
                id:'1',
                description:'Rent1',
                note:'Rent',
                amount:27000,
                createdAt:moment(223456700000)
            }
        
    )
})



test('Edit expense by ID ', () => {
    const action = {
            type:'EDIT_EXPENSE', 
            id:'5', 
            updates : {
                amount:27000
            }
        }
    const result = expensesReducer(expense, action)
    expect(result).toEqual(
            [...expense]
        
    )
})



// test('Should not Edit expense if ID doesnt exist', () => {
//     const result = expensesReducer(expense, {type:'EDIT_EXPENSE', id:'5'})
//     expect(result).toEqual(
//         [...expense]
//     )
// })

// const expensesReducer = (state=expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE' :
//             return [
//                 ...state, 
//                 action.expense
//             ]
//         case 'REMOVE_EXPENSE':
//             return state.filter(({id}) => {
//                 return id !== action.id;
//             }) 
//         case 'EDIT_EXPENSE': 
//             return state.map((expense) => {
//                 if(expense.id === action.id) {
//                     return {
//                         ...expense, 
//                         ...action.updates
//                     }
//                 } else {
//                     return expense;
//                 }
//             })
//         default:
//             return  state;
//     }
// }
