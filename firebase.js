
/* =========================================================
   AAKASH EARTH FESTIVAL
   FIREBASE CONFIGURATION
========================================================= */


/* FIREBASE APP */

import {
    initializeApp
}
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";


/* FIRESTORE DATABASE */

import {
    getFirestore
}
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


/* FIREBASE STORAGE */

import {
    getStorage
}
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-storage.js";



/* =========================================================
   FIREBASE PROJECT CONFIG
========================================================= */

const firebaseConfig = {

    apiKey:
        "AIzaSyDWdysUraHDxL5ePiCvkUetGh_Hdfgi00Q",

    authDomain:
        "aakash-earth-festival.firebaseapp.com",

    projectId:
        "aakash-earth-festival",

    storageBucket:
        "aakash-earth-festival.firebasestorage.app",

    messagingSenderId:
        "743953965657",

    appId:
        "1:743953965657:web:1b08d2b6fbf519888c8748",

    measurementId:
        "G-3M2F396NMM"

};



/* =========================================================
   INITIALIZE FIREBASE
========================================================= */

const app =
    initializeApp(
        firebaseConfig
    );



/* =========================================================
   FIRESTORE
========================================================= */

const db =
    getFirestore(
        app
    );



/* =========================================================
   FIREBASE STORAGE
========================================================= */

const storage =
    getStorage(
        app
    );



/* =========================================================
   CONNECTION MESSAGE
========================================================= */

console.log(
    "🔥 Aakash Earth Festival Firebase Connected"
);



/* =========================================================
   EXPORT
========================================================= */

export {
    app,
    db,
    storage
};