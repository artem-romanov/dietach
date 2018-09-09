import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

import { config } from '../config';

const myFirebaseApp = firebase.initializeApp({
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
});

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);

export default reduxSagaFirebase;
