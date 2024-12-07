// Establece la fecha de destino para la cuenta regresiva (cambia la fecha según lo necesites)
var fechaEvento = new Date("Jan 4, 2025 14:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var countdownFunction = setInterval(function() {
    var ahora = new Date().getTime();
    var distancia = fechaEvento - ahora;

    // Cálculos de tiempo para días, horas, minutos y segundos
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Actualiza los elementos <span> con los valores correspondientes
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").textContent = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos").textContent = segundos < 10 ? "0" + segundos : segundos;

    // Si la cuenta ha terminado, muestra un mensaje
    if (distancia < 0) {
        clearInterval(countdownFunction);
        document.getElementById("dias").textContent = 0;
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        document.querySelector(".countdown-title").textContent = "¡El gran día ha llegado!";
    }
}, 1000);
