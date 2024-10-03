function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const moeda = document.getElementById('moeda').value;
    const taxaRealPDolar =  0.20;
    const taxaDolarPReal = 5.00;

    let resultado = 0;
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(valor)) {
        document.getElementById("resultado").innerHTML = "Por favor insira o valor novamente";
        resultadoDiv.style.color = "#08d508";
        return;
    }
    if (moeda === "real") {
        resultado = valor * taxaRealPDolar;
        document.getElementById("resultado").innerHTML = "R$ " + valor + " é equivalente a $ " + resultado + " dólares";
        resultadoDiv.style.color = "#08d508";
    } else {
        resultado = valor * taxaDolarPReal;
        document.getElementById("resultado").innerHTML = "$ " + valor + " é equeivalente a R$ " + resultado.toFixed(2) + " reais";
        resultadoDiv.style.color = "#08d508";
    }
}