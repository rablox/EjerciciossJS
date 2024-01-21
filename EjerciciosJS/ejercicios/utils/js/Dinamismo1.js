function enviarDatos() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    let dni = document.getElementById('dni').value;
    let resultado = document.getElementById('resultado');

    if (!nombre || !apellido || !telefono || !dni) {
        resultado.innerHTML = 'Por favor, complete todos los campos.';
        return;
    }

    resultado.innerHTML = `Nombre: ${nombre} - Apellido: ${apellido} - DNI: ${dni} - Teléfono: ${telefono}`;
}
