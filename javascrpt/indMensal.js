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
    const consultarButton = document.querySelector("#consultar-button");
    const consultaModal = document.querySelector("#consulta-modal");
    const modalContent = document.querySelector("#modal-content");

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
            // Redirecionar para a página de login
            window.location.href = "pagina_de_login.html";
        }
    });

    // Manipular o envio do formulário de consulta
    consultarButton.addEventListener("click", function() {
        const consultaMesAno = document.getElementById("input_consulta").value;
        if (consultaMesAno) {
            // Realize a consulta dos índices e exiba os resultados em um modal
            const resultadoConsulta = "Resultados da consulta:\nMês e Ano: " + consultaMesAno;
            modalContent.textContent = resultadoConsulta;
            consultaModal.style.display = "block";
        } else {
            alert("Por favor, preencha o campo de consulta.");
        }
    });

    // Fechar o modal
    modalContent.addEventListener("click", function() {
        consultaModal.style.display = "none";
    });

    // Iniciar com a primeira etapa
    showStep(currentStep);
});
