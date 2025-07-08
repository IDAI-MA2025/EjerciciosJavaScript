document.addEventListener('DOMContentLoaded', function() {
        var formulario = document.getElementById("calculopizzas");
        var formulario2 = document.getElementById("buffet2");
        var resultadoInput = document.getElementById("resultado");
        function calcular(){
        var total = 0;
        var pizza = 0;
        var cantidad = formulario.cant.value;
        var niños = formulario2.non.value * 150;
        var adultos = formulario2.noa.value * 250; 
            
        /* Tamaño */
        if (formulario.size.value == "p"){
            pizza = pizza + 45;
        }
        else if (formulario.size.value == "c"){
            pizza = pizza + 90;
        }
        else if (formulario.size.value == "m"){
            pizza = pizza + 150;
        }
        else if (formulario.size.value == "f"){
            pizza = pizza + 250;
        }
        else if (formulario.size.value == "s"){
            pizza = pizza + 400;
        }

        /* Tipo de pan*/
        if (formulario.type.value == "n"){
            pizza = pizza + 0;
        }
        else if (formulario.type.value == "d"){
            pizza = pizza + 15;
        }
        else if (formulario.type.value == "pp"){
            pizza = pizza + 20;
        }
        else if (formulario.type.value == "hc"){
            pizza = pizza + 30;
        }

        /* Ingredientes Extras */
        if (formulario.ja.checked){
            pizza = pizza + 10;
        }
        if (formulario.pe.checked){
            pizza = pizza + 15;
        }
        if (formulario.to.checked){
            pizza = pizza + 10;
        }
        if (formulario.cha.checked){
            pizza = pizza + 15;
        }
        if (formulario.cho.checked){
            pizza = pizza + 10;
        }
        if (formulario.pi.checked){
            pizza = pizza + 5;
        }
        if (formulario.sa.checked){
            pizza = pizza + 15;
        }
        if (formulario.ac.checked){
            pizza = pizza + 5;
        }

        /*Especiladidades*/
        if (formulario.especiales.value == "no"){
            pizza = pizza + 0;
        }
        else if (formulario.especiales.value == "ma"){
            pizza = pizza + 59;
        }
        else if (formulario.especiales.value == "4q"){
            pizza = pizza + 69;
        }
        else if (formulario.especiales.value == "ha"){
            pizza = pizza + 79;
        }
        else if (formulario.especiales.value == "na"){
            pizza = pizza + 89;
        }
        else if (formulario.especiales.value == "ny"){
            pizza = pizza + 99;
        }
        else{alert("Selaccionar una Especialidad")}
                
        total = cantidad * pizza;
        if (total == 0){
        resultadoInput.value = "$" + (niños + adultos) + "MXN";

        }
        else {
        resultadoInput.value = "$" + total + "MXN";
        }
        
        
        
    }
        formulario.addEventListener('input', calcular);
        formulario.addEventListener('change', calcular);
        calcular();

        
        var calculoForm = document.getElementById("calculopizzas");
        var buffetForm = document.getElementById("buffet");
        var buffet2Form = document.getElementById("buffet2");
        var selectActive = buffetForm.querySelector('select[name="active"]');

        function limpiarFormulario(form) {
    Array.from(form.elements).forEach(function(el) {
        if (el.type === "checkbox" || el.type === "radio") {
            el.checked = false;
        } else if (el.tagName === "SELECT") {
            el.selectedIndex = 0;
        } else if (el.type === "number" || el.type === "text") {
            el.value = "";
        }
    });
    }

    function toggleForms() {
    var buffetSi = selectActive.value === "si";
    // Desactiva/activa Pizzas
    Array.from(calculoForm.elements).forEach(function(el) {
    if (el.id !== "resultado") {
        el.disabled = buffetSi;
    }
});
    // Desactiva/activa Buffet
    Array.from(buffet2Form.elements).forEach(function(el) {
        el.disabled = !buffetSi;
    });
    // Limpia el formulario que se desactiva
    if (buffetSi) {
        limpiarFormulario(calculoForm);
    } else {
        limpiarFormulario(buffet2Form);
    }
    }

    selectActive.addEventListener('change', toggleForms);
    toggleForms();

    
});