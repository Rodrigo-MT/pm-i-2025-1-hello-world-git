const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

// Verifica se o campo está vazio ao pressionar Enter
nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (nameInput.value.trim() === '') {
            messageP.innerText = 'Por favor, digite algo!';
        } else {
            helloWorld();
        }
    }
});

// Limpa o campo ao pressionar ESC
nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { // Tecla ESC
        nameInput.value = ''; // Limpa o input
        messageP.innerText = ''; // Limpa a mensagem (opcional)
    }
});

// Limpa a mensagem se o campo estiver vazio (opcional)
nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
};

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
};