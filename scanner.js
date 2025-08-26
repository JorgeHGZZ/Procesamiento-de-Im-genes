
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