function calcularTotal() {
  const adultos = parseInt(document.getElementById('adultos').value) || 0;
  const ninos = parseInt(document.getElementById('ninos').value) || 0;
  const totalPersonas = adultos + ninos;
  const diasHotel = parseInt(document.getElementById('diasHotel').value) || 0;

  const crucero = parseFloat(document.querySelector('input[name="crucero"]:checked')?.value || 0);
  const totalCrucero = crucero * totalPersonas;

  let totalExtras = 0;
  document.querySelectorAll('.extra:checked').forEach(el => {
    totalExtras += parseFloat(el.value);
  });
  totalExtras *= adultos;

  const avion = parseFloat(document.querySelector('input[name="avion"]:checked')?.value || 0);
  const totalAvion = avion * totalPersonas;

  const hotel = parseFloat(document.querySelector('input[name="hotel"]:checked')?.value || 0);
  const totalHotel = hotel * diasHotel * totalPersonas;

  const parking = parseFloat(document.querySelector('input[name="parking"]:checked')?.value || 0);
  const totalParking = parking * diasHotel;

  const total = totalCrucero + totalExtras + totalAvion + totalHotel + totalParking;

  document.getElementById("dolares").textContent = total.toFixed(2);
  document.getElementById("pesos").textContent = (total * 21).toFixed(2);
  document.getElementById("euros").textContent = (total * 0.87).toFixed(2); 
}
//whatsss
function enviarWhatsApp() {
  const adultos = document.getElementById('adultos').value;
  const ninos = document.getElementById('ninos').value;
  const diasHotel = document.getElementById('diasHotel').value;

  const crucero = document.querySelector('input[name="crucero"]:checked')?.parentElement?.textContent.trim() || "Ninguno";
  const avion = document.querySelector('input[name="avion"]:checked')?.parentElement?.textContent.trim() || "Ninguno";
  const hotel = document.querySelector('input[name="hotel"]:checked')?.parentElement?.textContent.trim() || "Ninguno";
  const parking = document.querySelector('input[name="parking"]:checked')?.parentElement?.textContent.trim() || "Ninguno";

  let extrasSeleccionados = [];
  document.querySelectorAll('.extra:checked').forEach(el => {
    extrasSeleccionados.push(el.parentElement.textContent.trim());
  });
  const extrasTexto = extrasSeleccionados.length > 0 ? extrasSeleccionados.join(", ") : "Ninguno";

  const dolares = document.getElementById("dolares").textContent;
  const pesos = document.getElementById("pesos").textContent;
  const euros = document.getElementById("euros").textContent;

  const mensaje = `Cotización de Viaje:

Adultos: ${adultos}
Niños: ${ninos}

Crucero: ${crucero}
Extras (solo adultos): ${extrasTexto}

Avión: ${avion}
Hotel: ${hotel}
Días de hotel: ${diasHotel}
Estacionamiento: ${parking}

Totales:
- Dólares (USD): $${dolares}
- Pesos (MXN): $${pesos}
- Euros (EUR): €${euros}

Gracias por tu interés en nuestra agencia!.`;

  const numero = "8110319824";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('change', calcularTotal);
  });

  calcularTotal();
});
