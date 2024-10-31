// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

async function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Por favor, selecciona una imagen.");
        return;
    }

    const storageRef = storage.ref('imagenes/' + file.name);
    await storageRef.put(file);
    const imageUrl = await storageRef.getDownloadURL();

    displayImage(imageUrl);
}

function displayImage(imageUrl) {
    const gallery = document.getElementById('gallery');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.width = 150; // Cambia el tamaño si lo prefieres
    gallery.appendChild(img);
}
