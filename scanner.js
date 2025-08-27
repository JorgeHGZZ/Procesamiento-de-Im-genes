
// Seleccionamos el modelo
const model = document.querySelector('#myModel');

// Escuchamos eventos de MindAR
model.addEventListener('targetFound', () => {
    console.log("Target detectado");
    model.setAttribute('animation-mixer', 'clip: *; loop: repeat;');
});

model.addEventListener('targetLost', () => {
    console.log("Target perdido");
    model.setAttribute('animation-mixer', 'clip: *; loop: none; timeScale: 0;');
});


const homebutton = document.querySelector('#homeBtn');
const exitbutton = document.querySelector('#exitButton');
const collectionbutton = document.querySelector('#collectionButton');


homebutton.addEventListener('click', function() {
    window.location.href = "index.html";
});

exitbutton.addEventListener('click', function() {
    window.location.href = "index.html";
});
