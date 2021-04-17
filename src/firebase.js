import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyC_FqOpJpEHVRZHqHQtnH0sGgONYqo84hY',
	authDomain: 'chat-app-2502d.firebaseapp.com',
	projectId: 'chat-app-2502d',
	storageBucket: 'chat-app-2502d.appspot.com',
	messagingSenderId: '810689118012',
	appId: '1:810689118012:web:65b1602e9e3a29aa8c2839',
	measurementId: 'G-EXFJXXN00C'
};

// //intializeApp parses the firebaseConfig into firebaseApp
const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
// 	apiKey: 'AIzaSyC_FqOpJpEHVRZHqHQtnH0sGgONYqo84hY',
// 	authDomain: 'chat-app-2502d.firebaseapp.com',
// 	projectId: 'chat-app-2502d',
// 	storageBucket: 'chat-app-2502d.appspot.com',
// 	messagingSenderId: '810689118012',
// 	appId: '1:810689118012:web:65b1602e9e3a29aa8c2839',
// 	measurementId: 'G-EXFJXXN00C'
// };

// // //intializeApp parses the firebaseConfig into firebaseApp
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
// const db = firebase.firestore();
// const auth = firebase.auth();

// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;
