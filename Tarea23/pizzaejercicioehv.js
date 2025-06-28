function calcular() {
    let total = 0;

    const buffet = document.getElementById("seleccion.buffet").value;

    if (buffet === "Si") {
        const adultos = parseInt(document.getElementById("numero.adultos").value) || 0;
        const ninos = parseInt(document.getElementById("numero.niños").value) || 0;
        total = (adultos * 250) + (ninos * 150);
    } else {
        const especial = document.getElementById("seleccion.especiales").value;
        switch (especial) {
            case "Margarita":
                total = 59;
                break;
            case "4 Quesos":
                total = 69;
                break;
            case "Hawaiana":
                total = 79;
                break;
            case "Napolitana":
                total = 89;
                break;
            case "New York":
                total = 99;
                break;
            default:
                
                total += calcularPizzaPersonalizada();
        }
    }

    // Mostrar total
    document.getElementById("total.Pagar").textContent = `$${total.toFixed(2)}`;
    document.getElementById("resultado").value = total.toFixed(2);
}

function calcularPizzaPersonalizada() {
    let subtotal = 0;

    // Cantidad de pizzas
    const cantidad = parseInt(document.getElementById("cantidad.pizzas").value) || 1;

    // Precio según tamaño
    const tamanos = document.getElementsByName("tamano");
    let precioTamano = 0;
    for (let i = 0; i < tamanos.length; i++) {
        if (tamanos[i].checked) {
            switch (tamanos[i].value) {
                case "Personal":
                    precioTamano = 45;
                    break;
                case "Chica":
                    precioTamano = 90;
                    break;
                case "Mediana":
                    precioTamano = 150;
                    break;
                case "Familiar":
                    precioTamano = 250;
                    break;
                case "Suprema":
                    precioTamano = 400;
                    break;
            }
        }
    }

    // Precio según pan
    const panes = document.getElementsByName("pan");
    let precioPan = 0;
    for (let i = 0; i < panes.length; i++) {
        if (panes[i].checked) {
            switch (panes[i].value) {
                case "Normal":
                    precioPan = 0;
                    break;
                case "Delgada":
                    precioPan = 15;
                    break;
                case "Pan Pizza":
                    precioPan = 20;
                    break;
                case "Hut Cheese":
                    precioPan = 30;
                    break;
            }
        }
    }

    // Precio según ingredientes
    const ingredientes = document.querySelectorAll("input[name='ingrediente']:checked");
    let precioIngredientes = 0;
    ingredientes.forEach((ing) => {
        switch (ing.value) {
            case "Jamon":
            case "Tocino":
            case "Chorizo Espanol":
                precioIngredientes += 10;
                break;
            case "Peperoni":
            case "Champiñones":
            case "Salami":
                precioIngredientes += 15;
                break;
            case "Piña":
            case "Aceitunas":
                precioIngredientes += 5;
                break;
        }
    });

    subtotal = (precioTamano + precioPan + precioIngredientes) * cantidad;

    return subtotal;
}