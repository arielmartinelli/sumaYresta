// Función para redirigir
function goToPage(page) {
    window.location.href = page;
}

// Función para opción incorrecta
function wrongChoice() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Intenta otra vez',
        confirmButtonText: 'OK',
    });
}

function wrongChoiceNo() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'No me gusta esta respuesta, intenta otra vez',
        confirmButtonText: 'OK',
    });
}

function wrongChoiceNoSe() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Esta respuesta tampoco me gusta',
        confirmButtonText: 'OK',
    });
}

function wrongChoiceSi() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Esta respuesta me gusta un poco mas, pero no es la mejor',
        confirmButtonText: 'OK',
    });
}

// Redirigir a la página externa
function goToExternal(page) {
    window.open('https://qlokura.tv/evento/18aniversario_EstadioKempes/8180', '_blank');
    window.location.href = page;
}

// Enviar mensaje por WhatsApp
function sendWhatsApp() {
    const input = document.getElementById("customMessage").value.trim(); // Obtiene el mensaje del campo de texto
    if (input === "") {
        // SweetAlert para avisar que el mensaje está vacío
        Swal.fire({
            title: 'Error',
            text: 'Por favor, escribe un mensaje antes de enviarlo.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    const message = encodeURIComponent(input); // Codifica el mensaje para URL
    const phoneNumber = "3516121498";
    
    // Abre el enlace de WhatsApp en una nueva pestaña
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank'); 
    
    // Redirige a otra página dentro del mismo sitio
    window.location.href = 'pagina9.html'; // Cambia 'otra-pagina.html' por el nombre de la página a la que deseas redirigir
}

function checkAnswers() {
    // Obtiene las respuestas del formulario
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;

    // Correctas: 5 + 3 = 8, 8 - 4 = 4, 6 + 7 = 13
    const correctAnswers = [8, 4, 13];
    const userAnswers = [q1, q2, q3];

    // Validar las respuestas
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
        if (parseInt(answer) === correctAnswers[index]) {
            correctCount++;
        }
    });

    // Mostrar el resultado
    const resultElement = document.getElementById("result");
    if (correctCount === 3) {
        resultElement.innerHTML = "¡Excelente! Has respondido todas las preguntas correctamente.";
    } else {
        resultElement.innerHTML = `Has acertado ${correctCount} de 3 preguntas. Inténtalo de nuevo.`;
    }

    // Redirigir después de un momento
    setTimeout(() => {
        window.location.href = "juego.html"; // Redirige al index.html
    }, 4000); // Redirige después de 3 segundos
}


