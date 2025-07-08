window.addEventListener('DOMContentLoaded', () => {
                let cant = document.getElementById('cantidad');
                let tamaño = document.querySelectorAll('input[name="tamaño"]');
                let pan = document.querySelectorAll('input[name="pan"]');
                let ing = document.querySelectorAll('input[type="checkbox"]');
                let esp = document.getElementById('especial');
                let buf = document.getElementById('buffet');
                let ad = document.getElementById('adultos');
                let ni = document.getElementById('ninos');
                let total = document.getElementById('total');
                let zonaBuf = document.getElementById('buffetInfo');

function verValor(radio) {
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        return parseFloat(radio[i].value); }
 }
    return 0; }

  window.toggleOpciones = function () {
                    if (buf.value === 'si') {
                    zonaBuf.style.display = 'block';
                    cant.disabled = true;
                    esp.disabled = true;
                    tamaño.forEach(x => x.disabled = true);
                    pan.forEach(x => x.disabled = true);
                    ing.forEach(x => x.disabled = true);
                    } else {
                    zonaBuf.style.display = 'none';
                    cant.disabled = false;
                    esp.disabled = false;
                    tamaño.forEach(x => x.disabled = false);
                    pan.forEach(x => x.disabled = false);
                    ing.forEach(x => x.disabled = false);
                    }
                    calcular();
                };

  function calcular() {
    let tot = 0;
    if (buf.value === 'si') {
      let a = parseInt(ad.value) || 0;
      let n = parseInt(ni.value) || 0;
      tot = a * 120 + n * 80;
    } else {
      let c = parseInt(cant.value) | 1;
      let t = verValor(tamaño);
      let p = verValor(pan);
      let e = parseFloat(esp.value) | 0;
      let sumaIng = 0;
      ing.forEach(i => {
        if (i.checked) {
          sumaIng += parseFloat(i.value);
}
      });
      tot = (t + p + e + sumaIng) * c;
    }
    total.textContent = tot.toFixed(2);
  }

  [cant, esp, buf, ad, ni].forEach(el => {
    el.addEventListener('input', calcular);
  });

  tamaño.forEach(r => r.addEventListener('change', calcular));
  pan.forEach(r => r.addEventListener('change', calcular));
  ing.forEach(chk => chk.addEventListener('change', calcular));

  toggleOpciones();
});