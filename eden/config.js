// eden/config.js

const firebaseConfig = {
    apiKey: "AIzaSyBNHkgkLR6WEQXDU7OdMyyWuoo-8jcSERo",
		  authDomain: "panduanteknis-6e258.firebaseapp.com",
		  databaseURL: "https://panduanteknis-6e258-default-rtdb.firebaseio.com",
		  projectId: "panduanteknis-6e258",
		  storageBucket: "panduanteknis-6e258.firebasestorage.app",
		  messagingSenderId: "202324364776",
		  appId: "1:202324364776:web:ddaf872764e19e5413685d",
		  measurementId: "G-VGFJF9L8W0"
};

// Simpan API Key ImgBB di sini juga
const IMGBB_API_KEY = "1ea7916278d418913459909e1a4985ec";

// Inisialisasi Firebase agar bisa dipakai di semua halaman
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
