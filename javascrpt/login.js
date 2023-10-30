  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const loginError = document.getElementById('login-error');

    function validarEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function validarSenha(senha) {
      // Adicione suas próprias regras de validação de senha, como comprimento mínimo, caracteres especiais, etc.
      return senha.length >= 8; // Exemplo: Senha deve ter pelo menos 8 caracteres
    }

    function validarLogin() {
      const email = emailInput.value;
      const senha = senhaInput.value;

      if (!validarEmail(email)) {
        loginError.textContent = 'Por favor, insira um endereço de e-mail válido.';
        return;
      }

      if (!validarSenha(senha)) {
        loginError.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        return;
      }

      // Se a validação for bem-sucedida, você pode prosseguir com a submissão do formulário
      // Adicione aqui a lógica de submissão do formulário, se necessário

      // Caso contrário, você pode exibir uma mensagem de erro personalizada
      loginError.textContent = '';
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio do formulário para a URL de ação
      validarLogin();
    });
  });
