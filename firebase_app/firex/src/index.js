// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore,applyMiddleware, compose } from "redux";
// import rootReducer from "./store/reducers/rootReducer";
// import { Provider, useSelector } from "react-redux";
// import thunk from "redux-thunk";
// import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
// import { reactReduxFirebase, ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
// import fbConfig from "./config/fbConfig";
// import firebase from 'firebase/app';




// const store = createStore(rootReducer, 
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(firebase, fbConfig)
//   )
// );

// // const rrfProps = {
// //   firebase,
// //   config: fbConfig,
// //   dispatch: store.dispatch,
// //   createFirestoreInstance
// // };

// const rrfProps = {
//   firebase,
//   config: fbConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance,
//   userProfile: 'users', // where profiles are stored in database
//   presence: 'presence', // where list of online users is stored in database
//   sessions: 'sessions'
// }




// function AuthIsLoaded({ children }) {
//   const auth = useSelector(state => state.firebase.auth)
//   if (!isLoaded(auth)) return <div>Loading Screen...</div>;
//   return children
// }


// ReactDOM.render(<Provider store={store}> <ReactReduxFirebaseProvider {...rrfProps}> <AuthIsLoaded><App /> </AuthIsLoaded></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));




// // store.firebaseAuthIsReady.then(()=> {
// //   ReactDOM.render(
// //     <React.StrictMode>
// //       <Provider store={store}>
// //         <ReactReduxFirebaseProvider {...rrfProps}>
// //           <App />
// //         </ReactReduxFirebaseProvider>
// //       </Provider>

// //     </React.StrictMode>,
// //     document.getElementById('root')
// //   );

// //   // If you want your app to work offline and load faster, you can change
// //   // unregister() to register() below. Note this comes with some pitfalls.
// //   // Learn more about service workers: https://bit.ly/CRA-PWA
// //   serviceWorker.unregister();
// // });


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig),
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence',
  sessions: 'sessions'
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();




