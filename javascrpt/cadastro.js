  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastro-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio do formulário para a URL de ação

      const nomeCompleto = document.getElementById('nomeCompleto').value;
      const nomeEmpresa = document.getElementById('nomeEmpresa').value;
      const cpf = document.getElementById('cpf').value;
      const celular = document.getElementById('celular').value;
      const setor = document.getElementById('setor').value;
      const funcao = document.getElementById('select-funcao').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

      // Função para verificar se um campo está vazio
      function campoVazio(valor) {
        return valor.trim() === '';
      }

      // Função para validar o formato do CPF
      function validarCPF(cpf) {
        // Implemente a validação de CPF adequada aqui
        // Você pode usar bibliotecas de validação de CPF de terceiros para isso
        // ou implementar a validação manualmente
        return true; // Temporariamente retornando true para fins de demonstração
      }

      // Função para validar o formato do e-mail
      function validarEmail(email) {
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regexEmail.test(email);
      }

      // Validação completa do formulário
      function validarFormulario() {
        if (campoVazio(nomeCompleto) || campoVazio(nomeEmpresa) || campoVazio(cpf) ||
            campoVazio(celular) || campoVazio(setor) || campoVazio(funcao) || 
            campoVazio(email) || campoVazio(senha) || campoVazio(confirmacaoSenha)) {
          alert('Por favor, preencha todos os campos obrigatórios.');
          return false;
        } else if (!validarCPF(cpf)) {
          alert('CPF inválido. Verifique o formato.');
          return false;
        } else if (!validarEmail(email)) {
          alert('Email inválido. Verifique o formato.');
          return false;
        } else if (senha.length < 8) {
          alert('A senha deve ter no mínimo 8 caracteres.');
          return false;
        } else if (senha !== confirmacaoSenha) {
          alert('As senhas não coincidem.');
          return false;
        }

        return true;
      }

      // Se a validação for bem-sucedida, envie o formulário
      if (validarFormulario()) {
        form.submit();
      }
    });
  });
