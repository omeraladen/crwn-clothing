import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config =  {
    apiKey: "AIzaSyBwKqF7VbQ22cDr-WwbTg5FdBqcEsVQqaU",
    authDomain: "crwn-db-4788a.firebaseapp.com",
    projectId: "crwn-db-4788a",
    storageBucket: "crwn-db-4788a.appspot.com",
    messagingSenderId: "574230841707",
    appId: "1:574230841707:web:efbc0ac6089f981cc4e42e",
    measurementId: "G-838SG6RTXS"
};
/////////////////////// Storing User Data  In Firebase => from userAuth to database
export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);


    const snapshot = await userRef.get();




    // if userRef not exist create one 

    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user' , error.massage);
        }
     }
    return userRef;
};
// Adding a Shop.data to fireStore - from local to cloud dataBase 

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };
  
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

///////////////////////////////////////////////////////////////////////////////////


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;