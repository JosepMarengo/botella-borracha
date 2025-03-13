const arrow = document.getElementById("arrow");
const challenge = document.getElementById("challenge");
let angle = 0;
let colorInterval; // Variable para almacenar el intervalo de cambio de color

// Retos organizados por nivel
const challengesByLevel = {
    1: ["beso en el cachete", "acaricia su rostro", "frente a frente a 1cm de distancia", "mirar a los ojos por 20 segundos "],
    2: ["10 besos de pico", "respirar en su oido por 10 segundos", "imita un animal durante 20 segundos", "salta como un conejo 10 veces"],
    3: ["corre en el lugar por 1 minuto", "haz 20 flexiones", "haz 10 abdominales", "camina como cangrejo por 30 segundos"]
};

let currentLevel = 1; // Nivel inicial

// Cambiar nivel
function setLevel(level) {
    currentLevel = level;
    challenge.textContent = `Nivel ${level} seleccionado. ¡Gira la botella!`;
}

// Cambiar el color de la flecha
function startChangingColors() {
    colorInterval = setInterval(() => {
        // Generar un color aleatorio
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        arrow.style.backgroundColor = randomColor; // Aplicar el color a la flecha
    }, 200); // Cambia de color cada 200ms
}

// Detener el cambio de colores
function stopChangingColors() {
    clearInterval(colorInterval); // Detener el intervalo
    arrow.style.backgroundColor = ""; // Opcional: Reinicia el color al predeterminado
}

// Girar la flecha y mostrar un reto basado en el nivel
function spinArrow() {
    angle += Math.random() * 1000;
    arrow.style.transition = 'transform 3s ease-out';
    arrow.style.transform = `rotate(${angle}deg)`;

    // Inicia el cambio de colores
    startChangingColors();

    setTimeout(() => {
        // Detener el cambio de colores después de 3 segundos (duración de la animación)
        stopChangingColors();

        // Seleccionar un reto aleatorio basado en el nivel actual
        const challenges = challengesByLevel[currentLevel];
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        challenge.textContent = randomChallenge;
    }, 3000); // Retardo tras la animación
}

// Eventos para la flecha y los botones de nivel
arrow.addEventListener("click", spinArrow);
document.getElementById("level1").addEventListener("click", () => setLevel(1));
document.getElementById("level2").addEventListener("click", () => setLevel(2));
document.getElementById("level3").addEventListener("click", () => setLevel(3));




