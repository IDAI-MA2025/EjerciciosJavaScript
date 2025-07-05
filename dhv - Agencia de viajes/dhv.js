document.addEventListener("DOMContentLoaded", () => {

    const inputsAfectanPrecio = document.querySelectorAll(
        'input[type="radio"], input[type="checkbox"], input[type="number"]'
    );

    inputsAfectanPrecio.forEach(input => {
        input.addEventListener("change", calcularPresupuesto);
        input.addEventListener("input", calcularPresupuesto); 
    });

    const btnEnviarCotizacion = document.getElementById("btnEnviarCotizacion");

    if (btnEnviarCotizacion) {
        btnEnviarCotizacion.addEventListener("click", () => {

            calcularPresupuesto(); 
            
            const totalUSD = parseFloat(document.getElementById("total-usd").textContent);

             
            if (totalUSD <= 0) { 
                alert("Por favor, selecciona alguna opción de viaje para generar una cotización.");
            } else {
                alert("!"); 
            }
        });
    }
    calcularPresupuesto();
});

function calcularPresupuesto() {
    let totalDolares = 0;

    const numAdultos = parseInt(document.getElementById("numAdultos").value) || 0;
    const numNinos = parseInt(document.getElementById("numNinos").value) || 0;
    const numDiasHotel = parseInt(document.getElementById("numDiasHotel").value) || 0;

    const cruceroSeleccionado = document.querySelector('input[name="radio-crucero"]:checked');
    if (cruceroSeleccionado) {
        const costoCrucero = parseFloat(cruceroSeleccionado.value);
        totalDolares += costoCrucero * (numAdultos + numNinos);
    }

    
    const extrasSeleccionados = document.querySelectorAll('input[name="extras"]:checked');
    extrasSeleccionados.forEach(extra => {
        const costoExtra = parseFloat(extra.value);
        totalDolares += costoExtra * numAdultos;
    });

    const transporteSeleccionado = document.querySelector('input[name="transporte"]:checked');
    if (transporteSeleccionado) {
        const costoTransporte = parseFloat(transporteSeleccionado.value);
        totalDolares += costoTransporte * (numAdultos + numNinos);
    }

    const hotelSeleccionado = document.querySelector('input[name="hotel"]:checked');
    if (hotelSeleccionado) {
        const costoHotelPorDia = parseFloat(hotelSeleccionado.value);
        totalDolares += costoHotelPorDia * numDiasHotel;
    }

    const estacionamientoSeleccionado = document.querySelector('input[name="estacionamiento"]:checked');
    if (estacionamientoSeleccionado) {
        const costoEstacionamientoPorDia = parseFloat(estacionamientoSeleccionado.value);
        totalDolares += costoEstacionamientoPorDia * numDiasHotel;
    }

    const tasaUSDaMXN = 21.00; 
    const tasaEURaMXN = 26.00; 

  
    const totalPesos = totalDolares * tasaUSDaMXN;
   
    const totalEuros = (totalDolares * tasaUSDaMXN) / tasaEURaMXN; 

    document.getElementById("total-usd").textContent = totalDolares.toFixed(2);
    document.getElementById("total-mxn").textContent = totalPesos.toFixed(2);
    document.getElementById("total-eur").textContent = totalEuros.toFixed(2);
}