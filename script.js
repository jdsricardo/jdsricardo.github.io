// Script para o calendário

const messages = {
    '2023-12-17': 'Início da nossa jornada juntos!',
    '2024-12-17': 'Completamos um ano de namoro!',
    // Adicione mais mensagens no formato 'YYYY-MM-DD'
};

const startDate = new Date('2023-12-17');
const endDate = new Date('2024-12-18');

const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

// Definir a data atual como o primeiro dia do mês de início
let currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);

const calendario = document.getElementById('calendario');
const mesAno = document.getElementById('mes-ano');
const mensagemDiv = document.getElementById('mensagem');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Função para renderizar o calendário
function renderizarCalendario() {
    calendario.innerHTML = '';

    // Título com o mês e ano
    mesAno.textContent = `${meses[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    // Desabilitar botões de navegação quando fora do intervalo
    prevBtn.disabled = false;
    nextBtn.disabled = false;

    if (
        currentDate.getFullYear() === startDate.getFullYear() && currentDate.getMonth() === startDate.getMonth()
    ) {
        prevBtn.disabled = true;
    }

    if (
        currentDate.getFullYear() === endDate.getFullYear() && currentDate.getMonth() === endDate.getMonth()
    ) {
        nextBtn.disabled = true;
    }

    // Cabeçalho com os dias da semana
    diasDaSemana.forEach(dia => {
        const div = document.createElement('div');
        div.textContent = dia;
        div.className = 'dia-semana';
        calendario.appendChild(div);
    });

    // Primeiro e último dia do mês
    const primeiroDia = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const ultimoDia = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Preenchimento com dias em branco
    const inicioDiaSemana = primeiroDia.getDay(); // 0 (Domingo) a 6 (Sábado)
    for (let i = 0; i < inicioDiaSemana; i++) {
        const div = document.createElement('div');
        div.className = 'disabled';
        calendario.appendChild(div);
    }

    // Dias do mês
    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
        const dataAtual = new Date(currentDate.getFullYear(), currentDate.getMonth(), dia);
        const dataString = dataAtual.toISOString().split('T')[0];
        const div = document.createElement('div');
        div.textContent = dia;
        div.className = 'dia';

        if (dataAtual < startDate || dataAtual > endDate) {
            div.classList.add('disabled');
        } else {
            div.addEventListener('click', () => exibirMensagem(dataString));
        }

        calendario.appendChild(div);
    }
}

// Função para exibir mensagens
function exibirMensagem(data) {
    mensagemDiv.textContent = messages[data] || 'Ainda não há mensagem para este dia.';
}

// Navegação entre os meses
prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderizarCalendario();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderizarCalendario();
});

// Inicializar o calendário
renderizarCalendario();

//Fim do script para calendário