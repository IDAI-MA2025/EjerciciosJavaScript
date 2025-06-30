function calcular() {
        var total = 0;

        // cantidad pizzas
        var cantidad = document.getElementById("cantidad.pizzas").value;

        // buffet
        var buffet = document.getElementById("seleccion.buffet").value;

        if (buffet == "Si") {
            var adultos = document.getElementById("numero.adultos").value;
            var niños = document.getElementById("numero.niños").value;

            total = (adultos * 250) + (niños * 150);
        } 
        else {
            // tamaño
            var tamañoSeleccionado = document.querySelector('input[name="tamaño"]:checked');
            if (!tamañoSeleccionado) {
                alert("Selecciona un tamaño de pizza");
                return;
            }

            if (tamañoSeleccionado.value == "Personal") {
                total = total + 45;
            } else if (tamañoSeleccionado.value == "Chica") {
                total = total + 90;
            } else if (tamañoSeleccionado.value == "Mediana") {
                total = total + 150;
            } else if (tamañoSeleccionado.value == "Familiar") {
                total = total + 250;
            } else if (tamañoSeleccionado.value == "Suprema") {
                total = total + 400;
            }

            // tipo de pan
            var panSeleccionado = document.querySelector('input[name="pan"]:checked');
            if (!panSeleccionado) {
                alert("Selecciona un tipo de pan");
                return;
            }

            if (panSeleccionado.value == "Normal") {
                total = total + 0;
            } else if (panSeleccionado.value == "Delgada") {
                total = total + 15;
            } else if (panSeleccionado.value == "Pan Pizza") {
                total = total + 20;
            } else if (panSeleccionado.value == "Hut Cheese") {
                total = total + 30;
            }

            // ingredientes
            if (document.querySelector('input[value="Jamon"]').checked) {
                total = total + 10;
            }

            if (document.querySelector('input[value="Tocino"]').checked) {
                total = total + 10;
            }

            if (document.querySelector('input[value="Chorizo Espanol"]').checked) {
                total = total + 10;
            }

            if (document.querySelector('input[value="Peperoni"]').checked) {
                total = total + 15;
            }

            if (document.querySelector('input[value="Champiñones"]').checked) {
                total = total + 15;
            }

            if (document.querySelector('input[value="Salami"]').checked) {
                total = total + 15;
            }

            if (document.querySelector('input[value="Piña"]').checked) {
                total = total + 5;
            }

            if (document.querySelector('input[value="Aceitunas"]').checked) {
                total = total + 5;
            }

            // especial
            var especial = document.getElementById("seleccion.especiales").value;
            if (especial == "Margarita") {
                total = total + 59;
            } else if (especial == "4 Quesos") {
                total = total + 69;
            } else if (especial == "Hawaiana") {
                total = total + 79;
            } else if (especial == "Napolitana") {
                total = total + 89;
            } else if (especial == "New York") {
                total = total + 99;
            }

            total = total * cantidad;
        }

     
        document.getElementById("total.Pagar").textContent = total.toFixed(2);
    }