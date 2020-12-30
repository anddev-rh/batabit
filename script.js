
const botonPagoAnual = document.getElementById('recomendado')
const botonPremium = document.getElementById('premium')
const botonBasico = document.getElementById('basico')

botonPagoAnual.addEventListener('click', LanzarAlerta)
botonPremium.addEventListener('click', LanzarAlerta2)
botonBasico.addEventListener('click', LanzarAlerta)

function LanzarAlerta () {

  swal("¡Muy bien!", "Nos pondremos en contacto,  para darte la información de tu pago.", "success");
}

function LanzarAlerta2 () {

  swal("Agotado", "Oh, lamentablemente, nuestra opción premium ya se agotó, intenta comprar otro plan.", "warning");
}


