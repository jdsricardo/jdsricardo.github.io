// Script para o calendário

const messages = {
    '2023-12-17': 'O início da nossa jornada juntos. A melhor decisão que ja tomei!',
    '2023-12-17': 'O início da nossa jornada juntos. A melhor decisão que já tomei!',
    '2023-12-18': 'Cada dia ao seu lado é uma nova razão para sorrir. Te amo!',
    '2023-12-19': 'Em cada gesto seu, vejo o quanto o nosso amor é forte e bonito.',
    '2023-12-20': 'Amar você é um privilégio que agradeço todos os dias.',
    '2023-12-21': 'Contigo, cada momento é inesquecível e repleto de felicidade.',
    '2023-12-22': 'Te ter ao meu lado é o maior presente da minha vida.',
    '2023-12-23': 'Cada dia ao seu lado me faz querer ser uma pessoa melhor.',
    '2023-12-24': 'Neste Natal, fui grato por ter você ao meu lado, compartilhando momentos especiais.',
    '2023-12-25': 'Nosso primeiro Natal! Com você, cada dia é uma celebração do nosso amor.',
    '2023-12-26': 'Juntos, fazemos até os dias mais comuns se tornarem extraordinários.',
    '2023-12-27': 'Seu sorriso ilumina minha vida e me faz sentir amado todos os dias.',
    '2023-12-28': 'Você é o motivo de eu acreditar no amor verdadeiro.',
    '2023-12-29': 'Nossa história é escrita a cada novo capítulo que vivemos juntos.',
    '2023-12-30': 'Agradeço por fazer de cada dia ao seu lado uma lembrança inesquecível.',
    '2023-12-31': 'O nosso primeiro ano novo juntos. Te amo para sempre!',
    '2024-12-17': 'Um ano ano ao lado do amor da minha vida!',
    
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
        div.setAttribute('data-date', dataString); // Adiciona o atributo data-date

        if (dataAtual < startDate || dataAtual > endDate) {
            div.classList.add('disabled');
        } else {
            div.addEventListener('click', () => exibirMensagem(div, dataString)); // Passa o elemento div
        }

        calendario.appendChild(div);
    }
}

// Função para exibir mensagens e gerenciar a classe 'active'
function exibirMensagem(diaClicado, data) {
    mensagemDiv.textContent = messages[data] || 'Ainda não há mensagem para este dia.';

    // Remover a classe 'active' de todos os dias
    const diasAtivos = document.querySelectorAll('.calendario .dia.active');
    diasAtivos.forEach(d => d.classList.remove('active'));

    // Adicionar a classe 'active' ao dia clicado, se não for desabilitado
    if (!diaClicado.classList.contains('disabled')) {
        diaClicado.classList.add('active');
    }
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