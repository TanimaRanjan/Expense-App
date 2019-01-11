import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCo4OALSbUNcm27ghVNUNWArmInwPReHXU",
    authDomain: "expense-app-f0a1f.firebaseapp.com",
    databaseURL: "https://expense-app-f0a1f.firebaseio.com",
    projectId: "expense-app-f0a1f",
    storageBucket: "expense-app-f0a1f.appspot.com",
    messagingSenderId: "365450292888"
  }
  firebase.initializeApp(config)

const database = firebase.database()

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

database.ref().update({
    name: 'Tanima Romero',
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city':'Brooklyn'
})