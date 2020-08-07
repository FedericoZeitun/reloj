function reloj(){
    let hoy = new Date()
    let hora = hoy.getHours()
    let minutos = hoy.getMinutes()
    let fecha = hoy.getDate()
    let day = hoy.getDay()
    let month = hoy.getMonth()

    hora = (hora == 0) ? 12 : hora;
    hora = (hora > 12) ? hora - 12 : hora;

    hora = horario(hora);
    minutos = horario(minutos);

    let dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    let hr = document.getElementById("hora").innerHTML = hora + ":" + minutos
    let dt = document.getElementById("fecha").innerHTML = dia[day] + ", " + fecha + " de " + mes[month] + ".";
    
    var time =  setTimeout(function(){reloj();}, 500);
}

function horario(e){
    if(e < 10){
        e = "0" + e
    }
    return e
}