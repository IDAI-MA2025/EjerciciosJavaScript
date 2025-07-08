function calcularTotal() {
    // Obtener valores seleccionados
    const crucero = parseFloat(document.querySelector('input[name="crucero"]:checked')?.value || 0);
    const avion = parseFloat(document.querySelector('input[name="avion"]:checked')?.value || 0);
    const hotel = parseFloat(document.querySelector('input[name="hotel"]:checked')?.value || 0);
    const estacionamiento = parseFloat(document.querySelector('input[name="parking"]:checked')?.value || 0);
    const diasHotel = parseInt(document.getElementById('diasHotel').value) || 0;
    const adultos = parseInt(document.getElementById('adultos').value) || 0;
    const ninos = parseInt(document.getElementById('ninos').value) || 0;

    // Calcular extras por adulto
    const extras = document.querySelectorAll('.extra');
    let totalExtras = 0;
    extras.forEach(extra => {
        if (extra.checked) {
            totalExtras += parseFloat(extra.value);
        }
    });
    totalExtras *= adultos;

    // Costo por persona
    const costoCrucero = crucero * (adultos + ninos);
    const costoAvion = avion * (adultos + ninos);
    const costoHotel = hotel * diasHotel;
    const costoEstacionamiento = estacionamiento * diasHotel;

    // Costo total
    const total = costoCrucero + totalExtras + costoAvion + (costoHotel + costoEstacionamiento);

    // Mostrar resultado
    const inputPresupuesto = document.querySelector('input[name="Presupuesto"]');
    if (inputPresupuesto) {
        inputPresupuesto.value = total.toFixed(2);
    }
}
