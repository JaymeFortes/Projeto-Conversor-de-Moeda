function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const moeda = document.getElementById('moeda').value;
    const taxaRealPDolar = 0.20;
    const taxaDolarPReal = 5.00;
    const taxaRealPPeso = 17.713;
    const taxaPesoPReal = 0.0056;

    let resultado = 0;
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(valor)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira o valor novamente.";
        resultadoDiv.style.color = "#ff0000"; // Mensagem de erro em vermelho
        return;
    }

    switch (moeda) {
        case "real":
            resultado = valor * taxaRealPDolar;
            resultadoDiv.innerHTML = "R$ " + valor.toFixed(2) + " é equivalente a $ " + resultado.toFixed(2) + " dólares.";
            resultadoDiv.style.color = "#08d508";
            break;

        case "dolar":
            resultado = valor * taxaDolarPReal;
            resultadoDiv.innerHTML = "$ " + valor.toFixed(2) + " é equivalente a R$ " + resultado.toFixed(2) + " reais.";
            resultadoDiv.style.color = "#08d508";
            break;

        case "peso":
            resultado = valor * taxaPesoPReal;
            resultadoDiv.innerHTML = "$ " + valor.toFixed(2) + " é equivalente a R$ " + resultado.toFixed(2) + " reais.";
            resultadoDiv.style.color = "#08d508";
            break;

        case "realParaPeso":
            resultado = valor * taxaRealPPeso;
            resultadoDiv.innerHTML = "R$ " + valor.toFixed(2) + " é equivalente a $ " + resultado.toFixed(2) + " pesos.";
            resultadoDiv.style.color = "#08d508";
            break;
    }
}