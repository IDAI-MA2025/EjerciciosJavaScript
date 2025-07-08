<script>
function calcularTotal() {
	let total = 0;

	// 1. CONSULTA
	const consulta = document.querySelector('input[name="consulta"]:checked');
	if (!consulta) {
		 alert("Selecciona una opción de consulta");
		return;
	       }
	 total += parseFloat(consulta.value);

	// 2. ANÁLISIS
	 const analisis = document.getElementById("analisis");
	 total += parseFloat(analisis.value);

	// 3. EXTRAS
	const extras = document.querySelectorAll(".extra:checked");
	extras.forEach(item => {
		total += parseFloat(item.value);});

	// 4. FACTURA
	const factura = document.getElementById("factura").value;
	if (factura === "") {
		alert("Debes seleccionar si requieres factura");
		return;}

	// 5. TIPO DE PAGO
	const pago = parseFloat(document.getElementById("pago").value);
	const recargo = total * pago;

	// 6. TOTAL FINAL
	const totalFinal = total + recargo;
    alert("El total a pagar es: $" + totalFinal.toFixed(2) + " MXN");}
</script>