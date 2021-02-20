// import firebase from 'firebase/app'
// import 'firebase/database'

import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};
































// //child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// //child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   })



// // database.ref("expenses").on("value", (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //         id:childSnapshot.key,
// //         ...childSnapshot.val()
// //     })
// //   })
// //   console.log(expenses);
// // })






// database.ref("expenses").push({
//     description:"Water Bill",
//     note:"Water bill knk",
//     amount:10900,
//     createdAt:1
// });





// // database.ref("expenses")
// //     .once("value")
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     }).catch((e) => {
// //         console.log(e);
// //     })








// // database.ref("notes/-MTrXknHdasm5QBqgLQP").remove();
// // database.ref("notes").push({
// //     title: "Course Topics",
// //     body: "Electron"
// // });



// // const onValueChange = database.ref().on("value", (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);

// // }, (err) => {
// //     console.log("Error with fetching data. ", e);
// // });


// // setTimeout(() => {
// //   database.ref().update({
// //       "job/company":"Google"
// //   })
// // },4000);

// // const onValueChange = database.ref().on("value", (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //   console.log("Error with data fetching.",e);
// // });

// // setTimeout(() => {
// //     database.ref("age").set(22);
// // }, 3500)
// // setTimeout(() => {
// //     database.ref().off("value", onValueChange);
// // }, 7000)


// // setTimeout(() => {
// //     database.ref("age").set(23);
// // }, 10500)



// // database.ref("location/city")
// // .once("value")
// // .then((snapshot) => {
// //   const val =snapshot.val();
// //   console.log(val);
// // }).catch((e) => {
// //   console.log("Error fetching data.", e);
// // })

// // database.ref().set({
// //     name: "Hakan Akdoğan",
// //     age: 20,
// //     stressLevel:6,
// //     job:{
// //         title:"Software Developer",
// //         company:"Google"
// //     },
// //     location: {
// //         city: "Bursa",
// //         country: "Turkey"
// //     }
// // }).then(() => {
// //     console.log("Data is saved");
// // }).catch((e) => {
// //     console.log("Something went wrong:", e);
// // })

// // database.ref().remove()
// //     .then(() => {
// //         console.log("Data removed successfully");
// //     }).catch((e) => {
// //         console.log("An error ocurred.", e)
// //     })

// // database.ref("isSingle").set(null)  //remove a eşdeğer

// // database.ref().update({
// //    stressLevel:9,
// //    "job/company":"Amazon",
// //    "location/city":"Seattle"
// // });