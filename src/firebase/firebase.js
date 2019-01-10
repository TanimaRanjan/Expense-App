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

  firebase.database().ref().set({
      name: 'Tanima Ranjan',
      age: 36,
      isSingle: false,
      location : {
          city: 'New York',
          country: 'United States'
      }
  })

  firebase.database().ref('age').set(35)
  firebase.database().ref('location/city').set('Brooklyn')

  firebase.database().ref('attributes').set({
      height:5.1,
      weight:133
  })