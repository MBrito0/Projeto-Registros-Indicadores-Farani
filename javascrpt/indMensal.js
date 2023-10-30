document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("multi-step-form");
    const steps = document.querySelectorAll(".step");
    const consultarIndicesForm = document.getElementById("consultar-indices-form");
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

            // Redirecionar de volta para a página de login
            window.location.href = ""; // Substitua com o URL correto
        }
    });

    // Manipulador de evento para consulta de índices
    consultarIndicesForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Coletar o mês e ano para consulta
        const consultaMesAno = document.getElementById("input_consulta").value;
        if (!consultaMesAno) {
            alert("Por favor, escolha um mês e ano para a consulta.");
            return;
        }

        // Aqui você deve implementar a lógica de consulta de índices no servidor e exibir os resultados ao usuário
        // Em vez de alert, você pode atualizar a página para exibir os resultados ou exibi-los em um modal, por exemplo.
        alert("Consulta de índices realizada com sucesso para " + consultaMesAno);
    });

    // Iniciar com a primeira etapa
    showStep(currentStep);
});
