async function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const moeda = document.getElementById('moeda').value;
    const resultadoDiv = document.getElementById('resultado');

    // Ocultar todas as bandeiras
    const bandeiras = document.querySelectorAll('.bandeiras');
    bandeiras.forEach(bandeira => bandeira.style.display = 'none');

    if (isNaN(valor)) {
        resultadoDiv.innerHTML = "Por favor, insira o valor novamente.";
        resultadoDiv.style.color = "#ff0000"; // Mensagem de erro em vermelho
        return;
    }

    const apiKey = "1b15291b27fa3c27fbb50ade427d2d5d";
    const url = `https://api.exchangeratesapi.io/latest?access_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        let resultado = 0;

        switch (moeda) {
            case "realParaDolar":
                resultado = valor / data.rates.BRL * data.rates.USD; // Valor em reais para dólares
                resultadoDiv.innerHTML = "R$ " + valor.toFixed(2) + " é equivalente a $ " + resultado.toFixed(2) + " dólares.";
                resultadoDiv.style.color = "#08d508";
                // Mostrar bandeiras correspondentes
                document.getElementById('bandeira-esquerda-real-dolar').parentElement.style.display = 'flex';
                break;

            case "dolarParaReal":
                resultado = valor * data.rates.BRL; // Valor em dólares para reais
                resultadoDiv.innerHTML = "$ " + valor.toFixed(2) + " é equivalente a R$ " + resultado.toFixed(2) + " reais.";
                resultadoDiv.style.color = "#08d508";
                // Mostrar bandeiras correspondentes
                document.getElementById('bandeira-esquerda-dolar-real').parentElement.style.display = 'flex';
                break;

            case "realParaPeso":
                resultado = valor / data.rates.BRL * data.rates.MXN; // Valor em reais para pesos
                resultadoDiv.innerHTML = "R$ " + valor.toFixed(2) + " é equivalente a $ " + resultado.toFixed(2) + " pesos.";
                resultadoDiv.style.color = "#08d508";
                // Mostrar bandeiras correspondentes
                document.getElementById('bandeira-esquerda-real-peso').parentElement.style.display = 'flex';
                break;

            case "pesoParaReal":
                resultado = valor / data.rates.MXN * data.rates.BRL; // Valor em pesos para reais
                resultadoDiv.innerHTML = "$ " + valor.toFixed(2) + " é equivalente a R$ " + resultado.toFixed(2) + " reais.";
                resultadoDiv.style.color = "#08d508";
                // Mostrar bandeiras correspondentes
                document.getElementById('bandeira-esquerda-peso-real').parentElement.style.display = 'flex';
                break;

            case "realParaEuro":
                resultado = valor / data.rates.BRL * data.rates.EUR;
                resultadoDiv.style.color = "#08d508";
                resultadoDiv.innerHTML = "R$ " + valor.toFixed(2) + " é equivalente a € " + resultado.toFixed(2) + " euros";
                // Mostrar bandeiras correspondentes
                document.getElementById('bandeira-esquerda-real-euro').parentElement.style.display = 'flex';
                break;

            case "euroParaReal":
                resultado = valor / data.rates.EUR * data.rates.BRL;
                resultadoDiv.style.color = "#08d508";
                resultadoDiv.innerHTML = "€ " + valor.toFixed(2) + " é equivalente a R$ " + resultado.toFixed(2) + " reais";
                // Mostrar bandeiras correspondentes
                document.getElementById('bandeira-esquerda-euro-real').parentElement.style.display = 'flex';
                break;
        }
    } catch (error) {
        console.error(error);
        resultadoDiv.innerHTML = "Erro ao obter dados da API.";
        resultadoDiv.style.color = "#ff0000"; // Mensagem de erro em vermelho
    }
}