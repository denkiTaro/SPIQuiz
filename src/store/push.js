import {doc, collection, getFirestore, setDoc} from 'firebase/firestore';
import { app } from '../service/firebase/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import * as jsonL from './json/言語.json';
import * as jsonN from './json/非言語.json';

/**
 * @param {string} collectionName 
 * @param {string} docName 
 * @param {Array} pushData
 */
function push( collectionName, docName, pushData ) {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth , 'denki.club.mori@gmail.com' , 'denkimori0378');
    const db = getFirestore(app);
    const collectionRef = collection(db, collectionName);
    const docRef = doc(collectionRef , docName );
    setDoc( docRef, pushData );
}