document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("multi-step-form");
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    // Função para exibir a etapa atual
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.style.display = "block";
            } else {
                step.style.display = "none";
            }
        });
    }

    // Função para avançar para a próxima etapa
    function nextStep() {
        if (validateStep(currentStep)) {
            currentStep++;
            showStep(currentStep);
        }
    }

    // Função para voltar para a etapa anterior
    function prevStep() {
        currentStep--;
        showStep(currentStep);
    }

    // Função para validar a etapa atual
    function validateStep(stepIndex) {
        const currentStepElement = steps[stepIndex];
        const inputs = currentStepElement.querySelectorAll("input, select");

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].hasAttribute("required") && !inputs[i].value) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return false;
            }
        }

        return true;
    }

    // Adicionar manipuladores de eventos aos botões
    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");
    const submitButton = document.querySelector(".submit-button");

    nextButton.addEventListener("click", function(event) {
        event.preventDefault();
        nextStep();
    });

    prevButton.addEventListener("click", function(event) {
        event.preventDefault();
        prevStep();
    });

    // Submeter o formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateStep(currentStep)) {
            // Aqui você pode enviar os dados do formulário para o servidor
            alert("Registro enviado com sucesso!");
        }
    });

    // Iniciar com a primeira etapa
    showStep(currentStep);
});

  // Manipular o envio do formulário de consulta
  document.getElementById('consultar-indices-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coletar o mês e ano para consulta
    const consultaMesAno = document.getElementById('consultaMesAno').value;

    // Realizar a consulta e exibir os resultados
    const resultadoConsulta = consultarIndices(consultaMesAno);

    if (resultadoConsulta) {
        alert('Resultados da consulta: ' + JSON.stringify(resultadoConsulta));
    } else {
        alert('Nenhum resultado encontrado para o mês e ano informados.');
    }
});

// Função para consultar índices mensais
function consultarIndices(mesAno) {
    const resultado = indicadoresMensais.find(indicador => indicador.mesAno === mesAno);
    return resultado;
};

// URL para onde você deseja fazer a solicitação POST
const url = 'https://api.sheetmonkey.io/form/gNeK9GAzNr4BasAtAUBVZn';

// Dados que você deseja enviar no corpo da solicitação POST (como um objeto JavaScript)
const data = indicadoresMensais ;

// Opções para a solicitação, incluindo o método POST, cabeçalhos e corpo
const options = {
method: 'POST',
headers: {
'Content-Type': 'application/json' // O tipo de conteúdo que você está enviando
},
body: JSON.stringify(data) // Converte o objeto JavaScript em uma string JSON
};

// Faça a solicitação POST usando a API Fetch
fetch(url, options)
.then(response => {
if (!response.ok) {
  throw new Error('Erro na solicitação POST');
}
return response.json();
})
.then(data => {
console.log('Resposta da solicitação POST:', data);
})
.catch(error => {
console.error('Erro:', error);
});