import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'


const createMockStore = configureMockStore([thunk])

test('Should set up remove expense action object', ()=> {
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})


test('Should set up edit expense action object ', () => {
    const action = editExpense('123abc', {amount:500})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc', 
        updates: {amount:500}
    })
})


test('Should set up add expense action object ', () => {
    // const expense = {description:'Rent',note:'Month rent', amount:123, createdAt:1234567}
    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: expenses[1] 
    })
})


test('Should add expense to Database and store', () => {
    const store = createMockStore({})
    const expenseData = {description:'Rent',note:'Month rent', amount:110234, createdAt:1234567}
    
    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE', 
                expense : {
                    id: expect.any(String),
                    ...expenseData
                }
            });
            database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseData)
                done();
            })
            
        })
}) 

test('Should add expense with defaults to Database and store', () => {
    
}) 


// test('Should set up add expense action object with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE', 
//         expense: {
//             id:expect.any(String), 
//             description:'',
//             note:'',
//             amount:0,
//             createdAt:0
//     }
//     })
// })




// {description='', note='', amount=0, createdAt=0}