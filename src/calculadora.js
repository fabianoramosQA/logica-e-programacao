function somarDoisNumeros (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function mediaDoisNumeros (valor1, valor2) {
    const resultadoSoma = valor1 + valor2;
    const resultadoMedia = resultadoSoma / 2
    return resultadoMedia;
}

module.exports = {
    somarDoisNumeros
}

