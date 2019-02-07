import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
  }
firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default } 

// database.ref('expenses').push({
//     description:'Gas Bill',
//     note: 'Gas Bill for Jan 2019',
//     amount : 2460,
//     createdAt: 345675545689
// })

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// setTimeout(() => {
// database.ref('expenses').push({
//     description:'Lunch ',
//     note: 'Saturday Lunch Salad',
//     amount : 3780,
//     createdAt: 345675545679
// })
// }, 10000)

//   database.ref().set({
//       name: 'Tanima Ranjan',
//       age: 36,
//       stressLevel:6,
//       job: {
//             title:'Software Devloper',
//             company:'Google'
//       },
//       location : {
//           city: 'New York',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((error) => {
//         console.log('This failed ', error)
//   })

// //   firebase.database().ref('age').set(35)
// //   firebase.database().ref('location/city').set('Brooklyn')

//   firebase.database().ref('attributes').set({
//       height:5.1,
//       weight:133
//   }).then(() => {
//     console.log('Added Attributes ')
//   }).catch((e) => {
//     console.log('Error - ',e)
//   })
// //   console.log('I made a request to change the data')

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was removed')
// }).catch(() => {
//     console.log('Did not remove data ', e)
// })


// database.ref('isSingle').set(null)

// database.ref().update({
//     name: 'Tanima Romero',
//     age: 35,
//     job: 'Software Developer', 
//     isSingle:null,
//     'location/city': 'Brooklyn'
// }).then(() => {
//     console.log('Data has been updated')
// }).catch(() => {
//     console.log('Did not update the data ', e)
// })


// database.ref().update({
//     stressLevel:9,
//     'job/C'
// })

// database.ref().update({
//     name: 'Tanima Romero',
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city':'Brooklyn'
// })


// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error Fetching data ',e)
//     })


// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val())
//     }, (e) => {
//         console.log('Error with data fetching ', e)
//     })
    
// setTimeout(() => {
//     database.ref().update({
//         stressLevel: 7
//     })
// }, 5000)    

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 8000)  


// setTimeout(() => {
//     database.ref().update({
//         stressLevel: 5
//     })
// }, 15000)  



// const onValueChange = database.ref()
//   .on('value', (snapshot)=> {
//       const val =  snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company} living in ${val.location.city}`)
//   }, (e)=> {
//     console.log('Error with the data fetching ! ', e)
//   })

//   setTimeout(() => {
//     database.ref().update({
//         'location/city' : 'Brooklyn'
//     })
//   }, 5000 )


// database.ref('notes').push({
//     title: ' Course Topics',
//     body: 'React Native, Angular, Python'
// })


// const firebaseNotes = {
//     notes : {
//         '12': {
//             title: 'first note',
//             body: 'This is my note'
//         },
//         '14': {
//             title: 'first note',
//             body: 'This is my note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First Note', 
//     body:'This is my note'
// },
// {
//     id: '14',
//     title: 'Second Note', 
//     body:'This is my 2nd note'
// }]

// database.ref('notes').set(notes)

// database.ref('notes/12')

// database.ref('notes/-LVuw7yUMPUoTwOaFODX').update({
//     body: 'Buy Food'
// })

// database.ref('expenses').push({
//     description:'Rent',
//     note: 'Rent for Jan 2019',
//     amount : 103456,
//     createdAt: 345675545674
// })

// database.ref('expenses').push({
//     description:'Electricity Bill',
//     note: 'Electric for Jan 2019',
//     amount : 8440,
//     createdAt: 345675545677
// })

// database.ref('expenses').push({
//     description:'Gas Bill',
//     note: 'Gas Bill for Jan 2019',
//     amount : 2460,
//     createdAt: 345675545689
// })


// database.ref('expenses')
// .on('value', ((snaphot) => {
//     const expenses = []
//     snaphot.forEach((child) => {
//         expenses.push({
//             id:child.id,
//             ...child.val()
//         })    
//     })
//     console.log(expenses)
// }), (e) => {
//     console.log('Unable to get the data ', e)
// })




// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//         // const val = snapshot.val()
//         // console.log(val)
//         const expenses = []
//         snapshot.forEach((child) => {
//             // console.log('Data --- ', child.key)
//             // console.log('Data --- ', child.val())
//             expenses.push({
//                 id:child.key,
//                 ...child.val()
//             })
//         });
//         console.log(expenses)
//   })
//   .catch((e) => {
//         console.log('Cannot fetch the data - ', e)
//   })
