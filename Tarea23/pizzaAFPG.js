 const PRECIOS = {
            buffet: {
                adulto: 180,
                niño: 120
            }
        };

       
        function calcularTotal() {
            let total = 0;
            const cantidad = parseInt(document.getElementById('cantidad').value) || 1;

           
            const buffetSeleccionado = document.getElementById('buffet').value === 'si';
            
            if (buffetSeleccionado) {
                
                const adultos = parseInt(document.getElementById('adultos').value) || 0;
                const niños = parseInt(document.getElementById('niños').value) || 0;
                
                total = (adultos * PRECIOS.buffet.adulto) + (niños * PRECIOS.buffet.niño);
            } else {
            
                const tamañoSeleccionado = document.querySelector('input[name="tamaños"]:checked');
                if (tamañoSeleccionado) {
                    total += parseInt(tamañoSeleccionado.dataset.precio);
                }

                const panSeleccionado = document.querySelector('input[name="pan"]:checked');
                if (panSeleccionado) {
                    total += parseInt(panSeleccionado.dataset.precio);
                }

                const ingredientesSeleccionados = document.querySelectorAll('input[name="ingrediente"]:checked');
                ingredientesSeleccionados.forEach(ingrediente => {
                    total += parseInt(ingrediente.dataset.precio);
                });

                const especialSeleccionado = document.getElementById('especial');
                const opcionEspecial = especialSeleccionado.options[especialSeleccionado.selectedIndex];
                if (opcionEspecial.dataset.precio) {
                    total += parseInt(opcionEspecial.dataset.precio);
                }

                total *= cantidad;
            }

         
            document.getElementById('pago').value = `$${total}`;
        }

        function toggleBuffetOptions() {
            const buffetSelect = document.getElementById('buffet');
            const buffetOptions = document.getElementById('buffet-options');
            
            if (buffetSelect.value === 'si') {
                buffetOptions.style.display = 'block';

                limpiarOpcionesPizza();
            } else  {
                buffetOptions.style.display = 'none';
            }

        }


        function limpiarOpcionesPizza() {
            document.getElementById('cantidad').value = 1;
            
            document.querySelectorAll('input[name="tamaños"]').forEach(radio => {
                radio.checked = false;
            });
            
            document.querySelectorAll('input[name="pan"]').forEach(radio => {
                radio.checked = false;
            });
            
            document.querySelectorAll('input[name="ingrediente"]').forEach(checkbox => {
                checkbox.checked = false;
            });
            
            document.getElementById('especial').selectedIndex = 0;
        }


        document.addEventListener('DOMContentLoaded', function() {
    
            document.getElementById('buffet').addEventListener('change', toggleBuffetOptions);
        });

        function limpiarFormulario() {
            document.getElementById('pizzas').reset();
            document.getElementById('buffet-options').style.display = 'none';
            document.getElementById('pago').value = '$0';
        }