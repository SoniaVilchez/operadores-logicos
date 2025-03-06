function evaluarLogica() {
    const valor1 = parseInt(document.getElementById('valor1').value);
    const valor2 = parseInt(document.getElementById('valor2').value);
    const operador = document.getElementById('operador').value;
    let resultado;

    // Asegurarse de que los valores son 0 o 1
    if (valor1 < 0 || valor1 > 1 || valor2 < 0 || valor2 > 1) {
        document.getElementById('resultado').innerText = "Por favor, ingrese solo 0 o 1.";
        return;
    }

    switch (operador) {
        case 'AND':
            resultado = valor1 & valor2;
            break;
        case 'OR':
            resultado = valor1 | valor2;
            break;
        case 'XOR':
            resultado = valor1 ^ valor2;
            break;
        default:
            resultado = 'Operador no válido';
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}