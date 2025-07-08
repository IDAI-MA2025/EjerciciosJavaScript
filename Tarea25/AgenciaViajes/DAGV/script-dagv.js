document.addEventListener('DOMContentLoaded', function() {
        var formulario = document.getElementById("viaje");
        var totaldolar = document.getElementById("resultado");
        var totalpesos = document.getElementById("resultado2");
        var totaleuros = document.getElementById("resultado3");
        function calcular(){
        var totaladultos = 0;
        var totaltransporte = 0;
        var totalcrucero = 0;
        var totalhotel = 0;
        var adultos = 0;
        var niños = 0;
        var dias = formulario.dias.value;
        var hab = formulario.hab.value;
        /*Adultos*/
        if ( formulario.adultos.value == "0" ) {
            adultos = 0;
        } else if ( formulario.adultos.value == "1" ) {
            adultos = 1;
        }else if ( formulario.adultos.value == "2" ) {
            adultos = 2;
        } else if ( formulario.adultos.value == "3" ) {
            adultos = 3;
        } else if ( formulario.adultos.value == "4" ) {
            adultos = 4;
        } else if ( formulario.adultos.value == "5" ) {
            adultos = 5;
        } else if ( formulario.adultos.value == "6" ) {
            adultos = 6;
        } else if ( formulario.adultos.value == "7" ) {
            adultos = 7;
        } else if ( formulario.adultos.value == "8" ) {
            adultos = 8;
        } else if ( formulario.adultos.value == "9" ) {
            adultos = 9;
        } else if ( formulario.adultos.value == "10" ) {
            adultos = 10;
        }
        /*Niños*/
        if ( formulario.niños.value == "0" ) {
            niños = 0;
        } else if ( formulario.niños.value == "1" ) {
            niños = 1;
        } else if ( formulario.niños.value == "2" ) {
            niños = 2;
        } else if ( formulario.niños.value == "3" ) {
            niños = 3;
        } else if ( formulario.niños.value == "4" ) {
            niños = 4;
        } else if ( formulario.niños.value == "5" ) {
            niños = 5;
        } else if ( formulario.niños.value == "6" ) {
            niños = 6;
        } else if ( formulario.niños.value == "7" ) {
            niños = 7;
        } else if ( formulario.niños.value == "8" ) {
            niños = 8;
        } else if ( formulario.niños.value == "9" ) {
            niños = 9;
        } else if ( formulario.niños.value == "10" ) {
            niños = 10;
        }
        /*Crucero*/
        if ( formulario.crucero.value == "sn" ) {
            totalcrucero = totalcrucero + 0;
        }
        else if ( formulario.crucero.value == "sc" ) {
            totalcrucero = totalcrucero + ((niños + adultos) * 2879);
        }
        else if ( formulario.crucero.value == "ee" ) {
            totalcrucero = totalcrucero + ((niños + adultos) * 3454);
        }
        else if ( formulario.crucero.value == "at" ) {
            totalcrucero = totalcrucero + ((niños + adultos) * 1840);
        }
        else if ( formulario.crucero.value == "ac" ) {
            totalcrucero = totalcrucero + ((niños + adultos) * 1069);
        }
        else if ( formulario.crucero.value == "da" ) {
            totalcrucero = totalcrucero + ((niños + adultos) * 1237);
        }
        
        /* Extras */
        if (formulario.ex1.checked){
            totaladultos = totaladultos + (adultos * 300);
        }
        if (formulario.ex2.checked){
            totaladultos = totaladultos + (adultos * 150);;
        }
        if (formulario.ex3.checked){
            totaladultos = totaladultos + (adultos * 500);;
        }
        if (formulario.ex4.checked){
            totaladultos =  totaladultos + (adultos * 100);;
        }
        if (formulario.ex5.checked){
            totaladultos = totaladultos + (adultos * 250);;
        }

        /*Transporte*/
         if ( formulario.trans.value == "t1" ) {
            totaltransporte = totaltransporte + 0;
        }
        else if ( formulario.trans.value == "t2" ) {
            totaltransporte = totaltransporte + ((niños + adultos) * 150);
        }
        /*Hotel*/
        if ( formulario.hotel.value == "h1" ) {
            totalhotel = totalhotel + (100 * dias * hab);
        }
        else if ( formulario.hotel.value == "h2" ) {
            totalhotel = totalhotel + (150 * dias * hab);
        }
        else if ( formulario.hotel.value == "h3" ) {
            totalhotel = totalhotel + (250 * dias * hab);
        }

        /*Estacionamiento*/
        if ( formulario.estacionamiento.value == "e1" ) {
            totalhotel = totalhotel + 0;
        }
        else if ( formulario.estacionamiento.value == "e2" ) {
            totalhotel = totalhotel + (10 * dias * hab);
        }

        

        var totaltotal = totaladultos + totalcrucero + totaltransporte + totalhotel;

        totaldolar.value = "$ " + totaltotal.toFixed(2) +" ";
        totalpesos.value = "$ " + (totaltotal*21).toFixed(2) +" MXN ";
        totaleuros.value = "€ " + ((totaltotal*21)/26).toFixed(2) + " ";

    }
        formulario.addEventListener('input', calcular);
        formulario.addEventListener('change', calcular);
        calcular();
});


    var hab = document.getElementById('hab');
    var dias = document.getElementById('dias');
    var hotelRadios = document.getElementsByName('hotel');
    var estacionamientoRadios = document.getElementsByName('estacionamiento');

    function actualizarCamposHotel() {
        if (hab.value == "0" || hab.value === "") {
            dias.value = "";
            dias.disabled = true;
            hotelRadios.forEach(r => { r.checked = false; r.disabled = true; });
            estacionamientoRadios.forEach(r => { r.checked = false; r.disabled = true; });
        } else {
            dias.disabled = false;
            hotelRadios.forEach(r => { r.disabled = false; });
            estacionamientoRadios.forEach(r => { r.disabled = false; });
        }
    }

    hab.addEventListener('input', actualizarCamposHotel);
    actualizarCamposHotel(); // Para el estado inicial



function validarcampos(event){
		var nombre = document.getElementById("nombre").value;
        var direccion = document.getElementById("adress").value;
        var telefono = document.getElementById("tel").value;
        var correo = document.getElementById("mail").value;

		if (nombre == "") {
        alert("El campo nombre es requerido");
        event.preventDefault();
        return false;
        }
        if (direccion == "") {
        alert("El campo dirección es requerido");
        event.preventDefault();
        return false;
        }
        if (telefono == "") {
        alert("El campo teléfono es requerido");
        event.preventDefault();
        return false;
        }
        if (correo == "") {
        alert("El campo correo es requerido");
        event.preventDefault();
        return false;
        }

        alert("Formulario enviado correctamente");
        return true;
}
function mandarwpp(event) {
    validarcampos(event);
    var form = document.getElementById('viaje');
    if (!form.checkValidity()) {
        form.reportValidity();
        event.preventDefault();
        return false;
    }
}
function mandarmail(event) {
    validarcampos(event);
    var form = document.getElementById('viaje');
    if (!form.checkValidity()) {
        form.reportValidity();
        event.preventDefault();
        return false;
    }
}