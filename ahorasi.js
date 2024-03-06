document.querySelectorAll('.square').forEach(function(square) {
  square.addEventListener('click', function() {
    toggleAnswer(this); // Pasamos el elemento '.square' como argumento
  });
  
  var header = square.querySelector('h4');
  header.addEventListener('click', function(event) {
    event.stopPropagation(); // Detiene la propagación del evento hacia arriba
    toggleAnswer(square); // Llama a toggleAnswer cuando se hace clic en el h4
  });
});

function aparecer() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none"; // Si el menú está visible, lo ocultamos
  } else {
    menu.style.display = "block"; // Si el menú está oculto, lo mostramos
  }
}

function toggleAnswer(element) {
  var answer = element.querySelector('.answer');
  var isOpen = element.classList.contains('open');
  
  // Invertimos el estado de la respuesta
  isOpen ? answer.style.display = "none" : answer.style.display = "block";
  
  // Invertimos la clase 'open'
  element.classList.toggle('open');
}

 document.addEventListener("DOMContentLoaded", function() {
  // Cerrar todas las respuestas al cargar la página
  document.querySelectorAll('.square').forEach(function(square) {
    square.classList.remove('open');
    square.querySelector('.answer').style.display = "none";
  });
});

function toggleAnswer(element) {
  var square = element.closest('.square');
  var answer = square.querySelector('.answer');
  

  // Cerrar todas las respuestas
  document.querySelectorAll('.square').forEach(function(sq) {
    sq.classList.remove('open');
    sq.querySelector('.answer').style.display = "none";
  });

  // Abrir la respuesta seleccionada
  square.classList.add('open');
  answer.style.display = "block";
}

// Lista de mensajes
var mensajes = [
  "Partidos en livestreaming",
  "Descuentos y beneficios",
  "Sabadell, Barcelona",
  "Atención 24hs WhatsApp",
  "Instagram: @gambetatorneo",
  "Tiktok: @gambetatorneo.bcn"
];

// Variable para mantener el índice del mensaje actual
var indiceMensaje = 0;

// Función para cambiar el mensaje
function cambiarMensaje() {
  // Obtener el elemento del h4
  var textoAnimado = document.getElementById("texto-animado");

  // Cambiar el contenido del h4 al mensaje actual
  textoAnimado.textContent = mensajes[indiceMensaje];

  // Incrementar el índice del mensaje
  indiceMensaje = (indiceMensaje + 1) % mensajes.length;
}

// Llamar a la función cambiarMensaje() para cambiar el mensaje inicial
cambiarMensaje();

// Establecer un intervalo para cambiar el mensaje cada 3 segundos
var intervalo = setInterval(cambiarMensaje, 6000);
