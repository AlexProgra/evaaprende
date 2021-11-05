document.getElementById("player").addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 20;
necesarios = 31;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
    randNum = Math.round(Math.random()*350);
    randNum2 = Math.round(Math.random()*750);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == 30) {
        alert("Ganaste");
    }
}

function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
    if (tiempo == 0) {
        alert("Perdiste");
        tiempo = 0;
        puntos = 0;
    }
}

setInterval(restarTiempo,1000);
