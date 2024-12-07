// Script para o calendário

const messages = {
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
    '2024-01-01': 'Começando o ano com você ao meu lado é o melhor presente que poderia pedir.',
    '2024-01-02': 'Cada dia com você é uma nova aventura e uma razão para sorrir.',
    '2024-01-03': 'Seu amor é a minha força, e ao seu lado, me sinto invencível.',
    '2024-01-04': 'A cada sorriso seu, meu coração se enche de mais amor por você.',
    '2024-01-05': 'Em cada pequeno gesto seu, encontro um mundo de amor e cuidado.',
    '2024-01-06': 'Sou eternamente grato por ter você na minha vida, te amo muitão!',
    '2024-01-07': 'A vida ao seu lado é mais bonita, mais cheia de significado. Te amo!',
    '2024-01-08': 'Você transforma tudo ao seu redor, e eu sou grato por fazer parte disso.',
    '2024-01-09': 'Nosso amor cresce a cada dia, e eu sou a pessoa mais feliz por te ter.',
    '2024-01-10': 'Você é a razão do meu sorriso, e eu sou grato por cada momento ao seu lado.',
    '2024-01-11': 'Mal posso esperar para ver o que o futuro nos reserva.',
    '2024-01-12': 'Amar você é fácil, porque você é tudo o que eu sempre procurei.',
    '2024-01-13': 'Hoje e sempre, vou te amar com todo o meu coração. Você é minha vida!',
    '2024-01-14': 'Cada momento contigo é precioso, e estou ansioso para construir mais memórias ao seu lado.',
    '2024-01-15': 'Com você, todos os dias são especiais, e eu sou imensamente grato por isso.',
    '2024-01-16': 'Eu me apaixono por você a cada olhar, a cada palavra, a cada gesto.',
    '2024-01-17': 'Você é minha felicidade, e ao seu lado, meu mundo é mais bonito.',
    '2024-01-18': 'Meu amor por você só cresce a cada dia, e eu sou eternamente grato por ter você ao meu lado.',
    '2024-01-19': 'Cada dia ao seu lado é uma nova chance de aprender, crescer e te amar ainda mais.',
    '2024-01-20': 'Te amo mais do que palavras podem expressar, você é a minha razão de ser.',
    '2024-01-21': 'A vida é mais doce com você nela. Sou tão feliz por te chamar de minha.',
    '2024-01-22': 'Ja posso dizer que você esta envelhecendo ao meu lado? Te amo muito, meu amor!',
    '2024-01-23': 'Eu sou o ser mais feliz por compartilhar minha vida com você. Te amo mais a cada dia.',
    '2024-01-24': 'Eu e você, juntos, somos imbatíveis. Não há nada mais perfeito do que isso.',
    '2024-01-25': 'A melhor parte do meu dia é te ver sorrindo. Você ilumina minha vida.',
    '2024-01-26': 'Você é minha pessoa favorita, e cada momento contigo é o meu melhor momento.',
    '2024-01-27': 'O amor que sinto por você é enorme, e estou pronto para passar o resto da minha vida ao seu lado.',
    '2024-01-28': 'Eu me apaixono por você todos os dias, e a cada dia o meu amor só cresce.',
    '2024-01-29': 'Juntos somos mais fortes, e com você ao meu lado, posso enfrentar qualquer coisa.',
    '2024-01-30': 'Cada palavra, cada gesto seu faz o meu coração bater mais rápido. Te amo mais do que você pode imaginar.',
    '2024-01-31': 'Finalizo o mês de Janeiro com a certeza de que você é tudo o que eu sempre sonhei e muito mais.',
    '2024-02-01': 'Iniciar mais um mês ao seu lado é como começar um capítulo de um livro de amor perfeito.',
    '2024-02-02': 'Você é o porto seguro onde minha alma descansa em paz e felicidade.',
    '2024-02-03': 'Cada olhar seu ilumina meus dias como o sol ao amanhecer.',
    '2024-02-04': 'O nosso amor é o presente mais valioso que a vida me deu.',
    '2024-02-05': 'A tua presença transforma qualquer dia comum em algo extraordinário.',
    '2024-02-06': 'Você é a poesia que colore a minha vida de felicidade.',
    '2024-02-07': 'Só você é capaz de preencher minha vida com tanta paz e amor.',
    '2024-02-08': 'Com você, até os silêncios são confortáveis e cheios de significado.',
    '2024-02-09': 'O amor que sinto por você não cabe em palavras; ele é infinito como o céu.',
    '2024-02-10': 'A melhor parte do meu dia é quando vejo o seu sorriso e percebo que sou o motivo dele.',
    '2024-02-11': 'Você é a canção mais linda que o meu coração já cantou.',
    '2024-02-12': 'Nos teus braços encontrei o lar que sempre procurei.',
    '2024-02-13': 'O nosso amor é a definição de eternidade em forma de sentimento.',
    '2024-02-14': 'Neste Dia dos Namorados, celebro o presente mais precioso: você!',
    '2024-02-15': 'Te amar é a minha maior alegria, todos os dias, sem exceção.',
    '2024-02-16': 'Nos seus olhos, vejo o reflexo de tudo que sempre sonhei.',
    '2024-02-17': 'Não importa onde estejamos, você sempre será o meu lugar favorito.',
    '2024-02-18': 'Meu amor por você cresce a cada dia, como as flores na primavera.',
    '2024-02-19': 'Você é minha luz em meio a qualquer escuridão que o mundo traga.',
    '2024-02-20': 'Amar você é como dançar na chuva: puro, intenso e cheio de vida.',
    '2024-02-21': 'O som da sua voz é a melodia que acalma meu coração.',
    '2024-02-22': 'Com você, cada momento é uma nova chance de ser feliz.',
    '2024-02-23': 'Você trouxe um novo significado para a palavra amor na minha vida.',
    '2024-02-24': 'Te amar é a melhor decisão que já tomei, ontem, hoje e sempre.',
    '2024-02-25': 'Você é o melhor capítulo da minha história, aquele que quero reler eternamente.',
    '2024-02-26': 'Seu carinho é o meu abrigo, onde encontro paz e felicidade.',
    '2024-02-27': 'Nos teus beijos, descubro o sabor da felicidade infinita.',
    '2024-02-28': 'Cada segundo ao seu lado é um tesouro que guardo com todo o meu coração.',
    '2024-02-29': 'No dia mais raro do ano, celebro o amor mais raro e especial: o nosso.',
    '2024-03-01': 'O início de março sempre me fez lembrar o quanto a nossa história é linda.',
    '2024-03-02': 'Relembrar o seu abraço me trouxe a paz que o meu coração precisava.',
    '2024-03-03': 'Cada memória ao seu lado me mostrou como o amor pode ser verdadeiro.',
    '2024-03-04': 'Nos momentos mais simples, você demonstrou que o amor está nos detalhes.',
    '2024-03-05': 'Te amar sempre foi como encontrar um tesouro a cada novo dia.',
    '2024-03-06': 'Você foi o motivo de tantos sorrisos que nem sei contar.',
    '2024-03-07': 'O seu olhar já me mostrou mundos inteiros que eu nem sabia que existiam.',
    '2024-03-08': 'Você fez dos meus dias mais difíceis momentos cheios de esperança e amor.',
    '2024-03-09': 'Houve dias em que bastou pensar em você para me sentir completo.',
    '2024-03-10': 'Lembrar dos seus gestos de carinho sempre aqueceu meu coração.',
    '2024-03-11': 'Você transformou a rotina em momentos mágicos que nunca esquecerei.',
    '2024-03-12': 'Nos dias de dúvida, seu amor foi a minha maior certeza.',
    '2024-03-13': 'Relembrar o som da sua risada foi suficiente para alegrar qualquer dia.',
    '2024-03-14': 'Você trouxe cor aos dias cinzentos que antes pareciam tão vazios.',
    '2024-03-15': 'Houve momentos em que sua presença foi tudo que precisei para ser feliz.',
    '2024-03-16': 'Seu amor me mostrou o verdadeiro significado de reciprocidade.',
    '2024-03-17': 'Pensar em você fez com que eu acreditasse no futuro mais bonito.',
    '2024-03-18': 'o início de um novo ciclo com você, finalmente mais perto de mim (Quase vizinhos).',
    '2024-03-19': 'Recordar nossos momentos juntos foi como reviver os dias mais lindos da minha vida.',
    '2024-03-20': 'Você sempre soube como transformar dias comuns em memórias inesquecíveis.',
    '2024-03-21': 'Seu sorriso sempre foi capaz de iluminar até os dias mais escuros.',
    '2024-03-22': 'As lembranças do nosso amor ainda fazem meu coração bater mais forte.',
    '2024-03-23': 'Você me mostrou que o amor verdadeiro está em ações sinceras e gentis.',
    '2024-03-24': 'Cada dia que passei ao seu lado foi uma prova de que a felicidade é real.',
    '2024-03-25': 'Eu nunca esquecerei a forma como você mudou minha vida com seu amor.',
    '2024-03-26': 'Seus abraços me fizeram sentir que o mundo era um lugar melhor.',
    '2024-03-27': 'As nossas conversas sempre me mostraram o quão especiais eram nossos momentos.',
    '2024-03-28': 'Pensei tantas vezes em você que cada memória se tornou um poema.',
    '2024-03-29': 'Você sempre foi a razão do brilho nos meus olhos e no meu coração.',
    '2024-03-30': 'Nos dias mais difíceis, seu amor foi o que manteve minha força viva.',
    '2024-03-31': 'Fechar o mês com tantas memórias lindas do nosso amor foi uma bênção.',
    '2024-04-01': 'No começo de abril, você trouxe risos que ecoaram no meu coração.',
    '2024-04-02': 'Lembrar da sua voz doce me fez perceber o quanto sou sortudo por te amar.',
    '2024-04-03': 'Seu amor foi a luz que guiou meus dias e me deu forças.',
    '2024-04-04': 'Em cada detalhe seu, encontrei motivos para me apaixonar mais.',
    '2024-04-05': 'Revivendo nossos momentos, percebi como a vida ganhou cor com você.',
    '2024-04-06': 'Seus gestos de carinho sempre deixaram minha alma em paz.',
    '2024-04-07': 'Os dias ao seu lado me ensinaram o verdadeiro significado de cumplicidade.',
    '2024-04-08': 'Mesmo na distância, seu amor foi o abraço que me envolveu.',
    '2024-04-09': 'Você mostrou que o amor é a soma de pequenos instantes mágicos.',
    '2024-04-10': 'Houve momentos em que sua risada foi a música mais bonita do dia.',
    '2024-04-11': 'Cada olhar seu me deu a certeza de que eu estava onde sempre quis estar.',
    '2024-04-12': 'Você sempre soube transformar cada dia em uma celebração de amor.',
    '2024-04-13': 'Seus conselhos foram o alicerce que me manteve firme nos dias difíceis.',
    '2024-04-14': 'Nos momentos de silêncio, eu sentia o quanto nossas almas estavam conectadas.',
    '2024-04-15': 'Você foi o refúgio que eu precisava em meio à tempestade da vida.',
    '2024-04-16': 'Relembrar o calor do seu abraço aqueceu meu coração tantas vezes.',
    '2024-04-17': 'Seu sorriso sempre foi um lembrete de que tudo vale a pena ao seu lado.',
    '2024-04-18': 'A doçura do seu jeito fez com que até os dias comuns fossem especiais.',
    '2024-04-19': 'Cada momento compartilhado com você foi um capítulo único da nossa história.',
    '2024-04-20': 'Sua força e amor foram o que sempre me inspiraram a seguir em frente.',
    '2024-04-21': 'Lembrar do nosso amor foi o que me manteve esperançoso nos dias cinzentos.',
    '2024-04-22': 'Nos seus braços, encontrei o lar que sempre busquei em meus sonhos.',
    '2024-04-23': 'Você me mostrou que o amor verdadeiro é um presente raro e precioso.',
    '2024-04-24': 'O simples fato de te ter em minha vida já fazia tudo valer a pena.',
    '2024-04-25': 'Seu amor foi o motivo dos melhores dias que já vivi.',
    '2024-04-26': 'Com você, aprendi que amar é cuidar, apoiar e compartilhar sonhos.',
    '2024-04-27': 'Relembrar nossos passeios me trouxe memórias tão doces quanto o seu sorriso.',
    '2024-04-28': 'Seu jeito de me ouvir sempre fez com que eu me sentisse compreendido e amado.',
    '2024-04-29': 'Cada gesto seu foi uma prova do quanto nosso amor era verdadeiro.',
    '2024-04-30': 'Finalizei o mês com a certeza de que nosso amor é o maior tesouro que já encontrei.',
    '2024-05-01': 'Comecei o mês com uma certeza: sua risada é mais relaxante do que qualquer feriado prolongado.',
    '2024-05-02': 'Lembrei de como você transforma até os dias mais caóticos em momentos de paz.',
    '2024-05-03': 'Revivi os momentos em que sua teimosia fez meu coração derreter... mesmo quando você estava errada!',
    '2024-05-04': 'Você sempre soube me fazer sorrir, mesmo quando eu só queria reclamar do dia.',
    '2024-05-05': 'Relembrar seus abraços é como reencontrar um cobertor quentinho em um dia frio.',
    '2024-05-06': 'Admito, em todos os dias de maio, você foi a minha estação favorita.',
    '2024-05-07': 'Nos pequenos gestos, você mostrou que o amor está nos detalhes que importam.',
    '2024-05-08': 'Revivendo as nossas conversas, percebi: você é minha filósofa favorita.',
    '2024-05-09': 'Até seus “dramas” foram momentos que me fizeram te amar ainda mais.',
    '2024-05-10': 'De todas as aventuras que já vivi, amar você foi a mais emocionante.',
    '2024-05-11': 'Relembrar sua espontaneidade foi como ganhar um sorriso surpresa no meio do dia.',
    '2024-05-12': 'Você me ensinou que o amor é como o melhor café: forte, quente e me mantém acordado pensando em você.',
    '2024-05-13': 'Seu jeito de cuidar de mim fez até os dias mais comuns parecerem especiais.',
    '2024-05-14': 'Lembrei de como sua alegria é contagiante. Quem precisa de terapia com você por perto?',
    '2024-05-15': 'Ao seu lado, percebi que não preciso de sorte. Tenho você!',
    '2024-05-16': 'Nosso amor é como pizza: sempre a melhor escolha, não importa o dia.',
    '2024-05-17': 'Se amar você fosse um esporte, eu seria campeão mundial... ou pelo menos um atleta dedicado!',
    '2024-05-18': 'Com você, aprendi que o melhor presente é ter alguém que ama até as suas piadas ruins.',
    '2024-05-19': 'Revivi seus olhares, que sempre disseram tudo sem precisar de palavras.',
    '2024-05-20': 'Você transformou as minhas segundas-feiras em dias dignos de sexta.',
    '2024-05-21': 'Relembrar nossas risadas foi como ouvir a trilha sonora mais feliz da vida.',
    '2024-05-22': 'Se eu pudesse voltar no tempo, viveria cada dia ao seu lado novamente.',
    '2024-05-23': 'Você trouxe um brilho que deixou todos os meus dias mais iluminados.',
    '2024-05-24': 'Nunca imaginei que um simples sorriso pudesse ter tanto poder sobre mim.',
    '2024-05-25': 'Até nas nossas discussões, descobri novas razões para te admirar.',
    '2024-05-26': 'Com você, o silêncio sempre foi confortável e cheio de significado.',
    '2024-05-27': 'Você me ensinou que o amor é simples e extraordinário ao mesmo tempo.',
    '2024-05-28': 'Seu jeito único fez cada dia ser digno de um “eu te amo” extra.',
    '2024-05-29': 'Revivendo os momentos, percebi que amar você é como colecionar tesouros diários.',
    '2024-05-30': 'Se o amor fosse uma música, você seria a letra que faz tudo fazer sentido.',
    '2024-05-31': 'Finalizei maio com a certeza de que, com você, todo dia é primavera no meu coração.',
    '2024-06-01': 'Junho começou com aquela sensação boa: você é minha estação favorita, faça sol ou faça chuva.',
    '2024-06-02': 'Com você, até os dias nublados têm um arco-íris escondido.',
    '2024-06-03': 'Seu sorriso ainda é o amanhecer mais bonito que já vi.',
    '2024-06-04': 'Amar você é como tomar sorvete num dia quente: impossível não sorrir!',
    '2024-06-05': 'Seu jeito me lembra como as coisas simples são as mais preciosas.',
    '2024-06-06': 'Se o amor fosse uma festa, você seria a música que faz todo mundo dançar.',
    '2024-06-07': 'Relembrando cada detalhe, percebo que você é a poesia que faltava na minha vida.',
    '2024-06-08': 'Nunca pensei que alguém pudesse roubar meu coração... e ainda rir disso!',
    '2024-06-09': 'Mesmo nos dias mais difíceis, lembrar de você faz tudo parecer mais leve.',
    '2024-06-10': 'Se amar você fosse uma viagem, eu nunca pediria para descer.',
    '2024-06-11': 'Você é minha calmaria em meio à correria do mundo.',
    '2024-06-12': 'No Dia dos Namorados, celebrei o maior presente: você.',
    '2024-06-13': 'Relembrar suas manias é lembrar como cada detalhe seu me encanta.',
    '2024-06-14': 'Com você, a vida sempre tem aquele sabor doce de sobremesa.',
    '2024-06-15': 'Você transformou meu “tanto faz” em “quero estar com você sempre”.',
    '2024-06-16': 'Se o amor fosse um jogo, você é meu combo perfeito!',
    '2024-06-17': 'Amar você é como um bom filme: cheio de surpresas e finais felizes.',
    '2024-06-18': 'Seu jeito de rir das minhas piadas ruins é prova do quanto você me ama.',
    '2024-06-19': 'Se o amor fosse uma receita, você seria meu ingrediente secreto.',
    '2024-06-20': 'Nos pequenos gestos, você sempre mostrou que o amor está nos detalhes.',
    '2024-06-21': 'Você é a melhor lembrança que carrego em todos os meus dias.',
    '2024-06-22': 'Até as nossas brincadeiras mais bobas são preciosas memórias.',
    '2024-06-23': 'Você sempre foi minha melhor escolha, todos os dias.',
    '2024-06-24': 'Com você, aprendi que a felicidade mora nas coisas simples, como seus abraços.',
    '2024-06-25': 'Você trouxe mais cor para os dias cinzentos da minha vida.',
    '2024-06-26': 'Sempre achei que contos de fada eram exagero, até te conhecer.',
    '2024-06-27': 'Seu jeito me ensinou que o amor é a maior das gentilezas.',
    '2024-06-28': 'Com você, até meus erros viram aprendizados cheios de carinho.',
    '2024-06-29': 'Meu primeiro aniversário com você ao meu lado, o melhor presente que eu poderia desejar.',
    '2024-06-30': 'Finalizo junho com o coração cheio de amor por tudo o que vivemos.',
    '2024-07-01': 'Começo julho com um lembrete: você é minha melhor estação, em qualquer mês.',
    '2024-07-02': 'Amar você é como sentir o calor de um dia ensolarado: aquece o coração e ilumina tudo.',
    '2024-07-03': 'Até o vento de julho parece sussurrar seu nome nos meus ouvidos.',
    '2024-07-04': 'Você é como um feriado: sempre uma pausa perfeita para minha alma.',
    '2024-07-05': 'Relembrar cada momento com você é como assistir ao meu filme favorito várias vezes.',
    '2024-07-06': 'Se a vida é uma viagem, você é o meu destino preferido.',
    '2024-07-07': 'Cada dia ao seu lado é como uma aventura que sempre quero continuar.',
    '2024-07-08': 'Você me ensinou que até os dias frios podem ser quentes quando estamos juntos.',
    '2024-07-09': 'Com você, cada manhã tem gosto de café fresquinho e abraço apertado.',
    '2024-07-10': 'Você é como meu cobertor favorito: me protege e me faz sentir em casa.',
    '2024-07-11': 'Amar você é como ver o mar pela primeira vez: surpreendente e infinito.',
    '2024-07-12': 'Até o dia mais comum vira especial quando lembro de você.',
    '2024-07-13': 'Se amar você fosse um esporte, eu seria campeão mundial todos os dias.',
    '2024-07-14': 'Você é a razão pela qual minha vida tem mais melodias e menos silêncios.',
    '2024-07-15': 'Com você, cada noite estrelada ganha uma estrela extra: o brilho do nosso amor.',
    '2024-07-16': 'Se o amor fosse uma música, você seria minha nota perfeita.',
    '2024-07-17': 'Seu jeito de ser faz até as coisas mais simples se tornarem mágicas.',
    '2024-07-18': 'Você é a certeza de que o amor verdadeiro é mais doce que um brigadeiro.',
    '2024-07-19': 'Relembrar seu sorriso é minha vitamina diária de felicidade.',
    '2024-07-20': 'Você é como uma tarde de julho: aconchegante, tranquila e cheia de paz.',
    '2024-07-21': 'Nos detalhes do dia, sempre encontro um pedacinho do amor que temos.',
    '2024-07-22': 'Se o amor tivesse um endereço, o meu seria onde você está.',
    '2024-07-23': 'Relembrar suas palavras é como folhear um livro que não quero que termine.',
    '2024-07-24': 'Você é como um dia ensolarado depois da tempestade: sempre bem-vinda.',
    '2024-07-25': 'Se você fosse uma estação, eu escolheria morar nela para sempre.',
    '2024-07-26': 'Nos momentos simples ao seu lado, percebo o quanto somos ricos em amor.',
    '2024-07-27': 'Amar você é minha rotina favorita, e não trocaria por nada.',
    '2024-07-28': 'Você é a melhor surpresa que o universo já me deu.',
    '2024-07-29': 'Relembrar nosso amor é minha terapia favorita.',
    '2024-07-30': 'Julho termina, mas o que sinto por você só cresce com o tempo.',
    '2024-07-31': 'Encerrar o mês com você nos pensamentos é certeza de um ano incrível.',
    '2024-08-01': 'Agosto começa, e meu coração só confirma: você é o melhor presente da vida.',
    '2024-08-02': 'Com você, até os dias longos de agosto passam como um piscar de olhos.',
    '2024-08-03': 'Relembrar seu sorriso é como sentir o sol aquecendo em um dia frio.',
    '2024-08-04': 'Amar você é como um bom livro: cada página é melhor que a anterior.',
    '2024-08-05': 'Mesmo em dias nublados, pensar em você é como ver o arco-íris.',
    '2024-08-06': 'Você é o detalhe mais bonito em todos os meus dias.',
    '2024-08-07': 'Cada lembrança com você é como uma estrela: ilumina meu céu.',
    '2024-08-08': 'Você é a minha definição pessoal de “tudo vale a pena”.',
    '2024-08-09': 'Se o amor fosse um poema, você seria o verso mais perfeito.',
    '2024-08-10': 'Agosto pode ter muitos dias, mas nenhum deles é tão especial quanto você.',
    '2024-08-11': 'Amar você me fez perceber que a felicidade é feita de momentos simples.',
    '2024-08-12': 'Você é como um pôr do sol: nunca cansa, nunca decepciona.',
    '2024-08-13': 'Pensar em você é como ouvir minha música favorita: sempre traz paz.',
    '2024-08-14': 'Até os dias mais comuns ficam extraordinários com a sua lembrança.',
    '2024-08-15': 'Você é a prova de que o amor verdadeiro não tem estação certa.',
    '2024-08-16': 'Com você, aprendi que o amor mora nos pequenos gestos.',
    '2024-08-17': 'Se meu coração tivesse um lema, seria: “por ela, sempre”.',
    '2024-08-18': 'Amar você é como viajar para o destino dos meus sonhos todos os dias.',
    '2024-08-19': 'Cada memória sua é como uma joia no meu tesouro de felicidade.',
    '2024-08-20': 'Você é o motivo pelo qual agosto passou tão rápido no meu coração.',
    '2024-08-21': 'Relembrar o brilho nos seus olhos é como ver a lua cheia: inesquecível.',
    '2024-08-22': 'Pensar em você faz meu coração dançar sem música.',
    '2024-08-23': 'Você é como aquela brisa fresca em um dia quente: revigorante e perfeita.',
    '2024-08-24': 'Se meu amor por você fosse um livro, ele teria páginas infinitas.',
    '2024-08-25': 'Você faz de cada dia uma celebração de carinho e alegria.',
    '2024-08-26': 'Com você, até os dias mais cinzas ganham cor.',
    '2024-08-27': 'Pensar em nós dois é como relembrar o momento mais bonito da vida.',
    '2024-08-28': 'Agosto está quase no fim, mas meu amor por você só começa.',
    '2024-08-29': 'Você é o motivo pelo qual acredito em “para sempre”.',
    '2024-08-30': 'Mesmo nos últimos dias do mês, você é meu começo e fim de pensamento.',
    '2024-08-31': 'Encerrar agosto com você no coração é como começar setembro com o pé direito.',
    '2024-09-01': 'Setembro começa, e meu coração continua florescendo com o seu amor.',
    '2024-09-02': 'Você é a primavera constante no meu jardim, mesmo quando setembro traz o calor.',
    '2024-09-03': 'Lembrei do seu sorriso hoje e perdi a noção do tempo... É mágico.',
    '2024-09-04': 'Com você, cada dia é como uma nova música que não canso de ouvir.',
    '2024-09-05': 'Se o amor fosse um mês, seria setembro: cheio de cor e vida.',
    '2024-09-06': 'Cada momento que revivo ao seu lado é como um abraço que aquece a alma.',
    '2024-09-07': 'Meu grito de independência é simples: só quero ser dependente do seu amor.',
    '2024-09-08': 'Você me faz acreditar que os contos de fadas podem ser reais.',
    '2024-09-09': 'Setembro traz flores, mas nenhuma é tão linda quanto você.',
    '2024-09-10': 'Você é a certeza de que o mundo pode ser mais bonito, só com amor.',
    '2024-09-11': 'Pensar em nós dois é como admirar uma obra de arte: indescritível.',
    '2024-09-12': 'Relembrar suas palavras doces é como saborear um chocolate preferido.',
    '2024-09-13': 'Você é a sexta-feira 13 da sorte na minha vida: inesquecível e única.',
    '2024-09-14': 'Se meu amor fosse uma paisagem, seria setembro com céu azul e ventos suaves.',
    '2024-09-15': 'Você faz do meu coração uma eterna casa de primavera.',
    '2024-09-16': 'Seus abraços são como setembro: confortáveis, lindos e acolhedores.',
    '2024-09-17': 'Relembrar cada momento ao seu lado é como ouvir minha playlist favorita.',
    '2024-09-18': 'Setembro me lembra você: cheio de cores e sempre me surpreende.',
    '2024-09-19': 'Você é o “bom dia” que minha vida sempre precisou.',
    '2024-09-20': 'Com você, até os dias longos de setembro passam num piscar de olhos.',
    '2024-09-21': 'Seu amor me ensina que todo dia pode ser primavera no coração.',
    '2024-09-22': 'O mundo pode mudar, mas meu amor por você é como setembro: eterno.',
    '2024-09-23': 'Hoje, pensei em como você faz a vida mais leve e cheia de sentido.',
    '2024-09-24': 'Com você, cada dia é um recomeço cheio de flores e sorrisos.',
    '2024-09-25': 'Você é o arco-íris que setembro pinta no céu do meu coração.',
    '2024-09-26': 'Seu amor é como o cheiro da chuva: relaxante e inesquecível.',
    '2024-09-27': 'Se amor fosse uma estação, seria a primavera que você traz para a minha vida.',
    '2024-09-28': 'Os ventos de setembro só me lembram o quanto sou sortudo por ter você.',
    '2024-09-29': 'Você faz até os dias comuns de setembro se tornarem extraordinários.',
    '2024-09-30': 'Fecho setembro com um coração mais cheio, graças ao seu amor.',
    '2024-10-01': 'Outubro chegou, e com ele, mais motivos para amar você todos os dias.',
    '2024-10-02': 'Você é como o sol de outubro: aquece minha vida e me enche de luz.',
    '2024-10-03': 'Cada vez que penso em nós dois, sinto o coração dançar uma valsa.',
    '2024-10-04': 'Se o amor fosse uma paisagem, seria a serenidade de outubro ao seu lado.',
    '2024-10-05': 'Você é o motivo pelo qual os dias nublados de outubro ainda têm brilho.',
    '2024-10-06': 'Com você, até o vento gelado de outubro se transforma em um abraço quente.',
    '2024-10-07': 'Lembrei de você e percebi: nada se compara ao nosso amor.',
    '2024-10-08': 'Você é o detalhe que torna minha vida extraordinária todos os dias.',
    '2024-10-09': 'Outubro pode trazer mudanças, mas meu amor por você só cresce.',
    '2024-10-10': 'Seu sorriso é como o céu de outubro: vasto, lindo e irresistível.',
    '2024-10-11': 'Hoje pensei: como tive tanta sorte de encontrar alguém como você?',
    '2024-10-12': 'Se amar você fosse um feriado, eu celebraria todos os dias.',
    '2024-10-13': 'Você é a certeza de que o amor pode ser tão belo quanto as cores de outubro.',
    '2024-10-14': 'Outubro me lembra que o melhor da vida é simples: estar com você.',
    '2024-10-15': 'Você é a calmaria em meio aos ventos de outubro. Sempre meu refúgio.',
    '2024-10-16': 'Nosso amor é como outubro: bonito, inesperado e cheio de vida.',
    '2024-10-17': 'Com você, todo dia é como o melhor domingo de outubro: aconchegante e feliz.',
    '2024-10-18': 'Se o amor fosse uma estação, seria como outubro: cheio de promessas lindas.',
    '2024-10-19': 'Meu coração encontrou em você o lar que sempre procurou.',
    '2024-10-20': 'Você é o poema mais lindo que outubro poderia escrever em minha vida.',
    '2024-10-21': 'Hoje pensei: se o amor tivesse cheiro, teria o perfume de outubro ao seu lado.',
    '2024-10-22': 'Com você, até as folhas que caem parecem dançar de alegria.',
    '2024-10-23': 'Seus abraços são o cobertor perfeito para as noites de outubro.',
    '2024-10-24': 'Você é a certeza de que cada detalhe da vida ao seu lado vale a pena.',
    '2024-10-25': 'Outubro traz memórias, e todas as melhores têm você.',
    '2024-10-26': 'Se o amor tivesse um som, seria a melodia que sinto ao te abraçar.',
    '2024-10-27': 'Pensei em como você torna minha vida leve, como a brisa de outubro.',
    '2024-10-28': 'Você é a poesia que outubro traz ao meu coração todos os dias.',
    '2024-10-29': 'Com você, cada dia de outubro tem mais cor e mais sentido.',
    '2024-10-30': 'Outubro está terminando, mas meu amor por você é infinito.',
    '2024-10-31': 'Fecho outubro com a certeza de que viver ao seu lado é meu maior presente.',
    '2024-11-01': 'Novembro chegou, mas meu amor por você é atemporal, como sempre.',
    '2024-11-02': 'Você tem o poder de transformar qualquer dia comum de novembro em um dia inesquecível.',
    '2024-11-03': 'Com você, até as folhas caídas de novembro parecem mais bonitas.',
    '2024-11-04': 'Ao seu lado, até os ventos de novembro parecem suaves e aconchegantes.',
    '2024-11-05': 'Você faz de cada novembro um capítulo de felicidade na nossa história.',
    '2024-11-06': 'Mesmo com as mudanças de estação, meu amor por você nunca se apaga.',
    '2024-11-07': 'Pensando em você, me sinto como o sol de novembro: aquecido e cheio de vida.',
    '2024-11-08': 'Novembro é mais bonito com você, e cada dia parece mais perfeito ao seu lado.',
    '2024-11-09': 'Seu sorriso é a luz que ilumina qualquer dia nublado de novembro.',
    '2024-11-10': 'Em cada amanhecer de novembro, me sinto grato por ter você em minha vida.',
    '2024-11-11': 'Você é a razão de eu ser tão feliz, até nos dias frios e cinzentos de novembro.',
    '2024-11-12': 'Meu coração encontra seu lugar em você, como as folhas encontrando o solo de novembro.',
    '2024-11-13': 'Com você, o outono nunca termina; só se renova a cada dia.',
    '2024-11-14': 'Eu te amo com a mesma intensidade do primeiro dia de novembro. Sempre.',
    '2024-11-15': 'Nosso amor é como novembro: sereno, forte e com um toque de magia.',
    '2024-11-16': 'Cada gesto seu me faz acreditar mais na beleza do mundo e do nosso amor.',
    '2024-11-17': 'Você faz meu coração bater mais forte, mesmo nas tardes calmas de novembro.',
    '2024-11-18': 'Nosso amor tem a suavidade e a beleza de novembro: perfeito em cada detalhe.',
    '2024-11-19': 'Eu te amo mais do que as folhas que caem em novembro, e isso já é muito.',
    '2024-11-20': 'Com você, cada mês é uma celebração. Novembro só tem sentido ao seu lado.',
    '2024-11-21': 'Você é a razão pela qual meu novembro está mais quente e acolhedor.',
    '2024-11-22': 'A cada olhar, a cada sorriso, meu amor por você cresce mais, como as cores de novembro.',
    '2024-11-23': 'O simples fato de estar com você torna qualquer dia de novembro especial.',
    '2024-11-24': 'Você é meu abrigo no frio de novembro e meu sol nas manhãs de outono.',
    '2024-11-25': 'Com você, cada instante é eterno, e novembro nunca parece ter fim.',
    '2024-11-26': 'O melhor de novembro é saber que tenho você ao meu lado, hoje e sempre.',
    '2024-11-27': 'Em cada canto de novembro, eu encontro mais motivos para amar você.',
    '2024-11-28': 'Meu coração pertence a você, e novembro é só mais um mês para celebrarmos isso.',
    '2024-11-29': 'Você faz meu novembro brilhar, e todos os outros meses também.',
    '2024-11-30': 'Finalizo novembro com a certeza de que você é o melhor presente que a vida me deu.',
    '2024-12-01': 'Dezembro chegou, e com ele, a certeza de que cada momento ao seu lado é uma bênção.',
    '2024-12-02': 'Nosso primeiro dezembro juntos, e o amor só cresce mais a cada dia.',
    '2024-12-03': 'Em cada amanhecer, sinto-me grato por ter você ao meu lado. Este dezembro é nosso.',
    '2024-12-04': 'O mais bonito de dezembro é saber que em cada dia, o meu amor por você só aumenta.',
    '2024-12-05': 'Nosso primeiro Natal juntos está chegando, e meu coração já está transbordando de amor por você.',
    '2024-12-06': 'A cada passo que damos juntos, a nossa história de amor se torna mais especial. Feliz dezembro!',
    '2024-12-07': 'Que sorte a minha de ter você como companhia neste dezembro cheio de promessas e sonhos.',
    '2024-12-08': 'Dezembro é apenas mais um mês, mas com você ao meu lado, é o melhor mês de todos.',
    '2024-12-09': 'Eu não imaginava que o último mês do ano poderia ser tão perfeito ao seu lado.',
    '2024-12-10': 'A cada olhar, a cada sorriso, dezembro ganha uma nova cor, mais vibrante, mais apaixonante.',
    '2024-12-11': 'Você fez deste ano algo inesquecível. Dezembro será a cereja no topo do nosso bolo.',
    '2024-12-12': 'Com você, cada dezembro será repleto de novas memórias e momentos especiais.',
    '2024-12-13': 'Meu coração já bate mais forte só de pensar no nosso primeiro ano de muitos juntos.',
    '2024-12-14': 'O melhor de dezembro não são as festas, mas sim a certeza de que o nosso amor é eterno.',
    '2024-12-15': 'Faltam apenas dois dias para completarmos um ano juntos. Parece que foi ontem que começamos nossa jornada.',
    '2024-12-16': 'Em um ano, você me ensinou mais sobre amor do que eu poderia aprender a vida inteira.',
    '2024-12-17': 'Hoje celebramos um ano de amor, companheirismo e todas as pequenas coisas que fazem nossa relação ser única. Obrigado por cada momento, por cada risada, por cada abraço. Que venham muitos anos mais, sempre juntos. Eu amo você!',


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

// Variável para armazenar a data selecionada
let selectedDate = null;

const calendario = document.getElementById('calendario');
const mesAno = document.getElementById('mes-ano');
const mensagemDiv = document.getElementById('mensagem-text'); // Atualizado para o span
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prevDayBtn = document.getElementById('prev-day');
const nextDayBtn = document.getElementById('next-day');

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
        div.textContent = '';
        calendario.appendChild(div);
    }

    // Dias do mês
    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
        const dataAtual = new Date(currentDate.getFullYear(), currentDate.getMonth(), dia);
        const year = dataAtual.getFullYear();
        const month = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês 1-based
        const day = String(dataAtual.getDate()).padStart(2, '0');
        const dataString = `${year}-${month}-${day}`;

        const div = document.createElement('div');
        div.textContent = dia;
        div.classList.add('dia');
        div.setAttribute('data-date', dataString); // Adiciona o atributo data-date

        if (dataAtual < startDate || dataAtual > endDate) {
            div.classList.add('disabled');
        } else {
            div.addEventListener('click', () => selecionarDia(div, dataString));
        }

        calendario.appendChild(div);
    }

    // Se houver uma data selecionada, realce-a no novo calendário
    if (selectedDate) {
        const diaSelecionado = document.querySelector(`#calendario .dia[data-date="${formatDate(selectedDate)}"]`);
        if (diaSelecionado && !diaSelecionado.classList.contains('disabled')) {
            diaSelecionado.classList.add('active');
        }
    }
}

// Função para formatar data como 'YYYY-MM-DD'
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês 1-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Função para selecionar um dia
function selecionarDia(diaClicado, data) {
    // Parsear a data corretamente
    const [year, month, day] = data.split('-').map(Number);
    selectedDate = new Date(year, month - 1, day);

    exibirMensagem(selectedDate);
    atualizarCalendarioAtivo();
}

// Função para exibir mensagens e gerenciar a classe 'active'
function exibirMensagem(data) {
    const dataString = formatDate(data);
    mensagemDiv.textContent = messages[dataString] || 'Ainda não há mensagem para este dia.';
}

// Função para atualizar a classe 'active' no calendário
function atualizarCalendarioAtivo() {
    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();

    if (selectedMonth !== currentDate.getMonth() || selectedYear !== currentDate.getFullYear()) {
        currentDate = new Date(selectedYear, selectedMonth, 1);
        renderizarCalendario();
        return; // O renderizarCalendario já destacará a data selecionada
    }

    // Remover a classe 'active' de todos os dias
    const diasAtivos = document.querySelectorAll('#calendario .dia.active');
    diasAtivos.forEach(d => d.classList.remove('active'));

    // Adicionar a classe 'active' ao dia selecionado, se estiver dentro do intervalo
    if (selectedDate >= startDate && selectedDate <= endDate) {
        const diaSelecionado = document.querySelector(`#calendario .dia[data-date="${formatDate(selectedDate)}"]`);
        if (diaSelecionado) {
            diaSelecionado.classList.add('active');
        }
    }

    // Atualizar o estado dos botões de navegação de dias
    atualizarBotoesNavegacaoDia();
}

// Função para atualizar o estado dos botões de navegação de dias
function atualizarBotoesNavegacaoDia() {
    if (!selectedDate) {
        prevDayBtn.disabled = true;
        nextDayBtn.disabled = true;
        return;
    }

    const prevDay = new Date(selectedDate);
    prevDay.setDate(prevDay.getDate() - 1);
    prevDayBtn.disabled = prevDay < startDate;

    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    nextDayBtn.disabled = nextDay > endDate;
}

// Função para navegar pelos dias
function navegarDia(delta) {
    if (!selectedDate) {
        alert('Por favor, selecione um dia primeiro.');
        return;
    }

    const novaData = new Date(selectedDate);
    novaData.setDate(novaData.getDate() + delta);

    // Verificar se a nova data está dentro do intervalo
    if (novaData < startDate || novaData > endDate) {
        return;
    }

    selectedDate = novaData;
    exibirMensagem(selectedDate);
    atualizarCalendarioAtivo();
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

// Navegação entre os dias
prevDayBtn.addEventListener('click', () => {
    navegarDia(-1);
});

nextDayBtn.addEventListener('click', () => {
    navegarDia(1);
});

// Inicializar o calendário
renderizarCalendario();

// Atualizar o estado dos botões de navegação de dias no carregamento
atualizarBotoesNavegacaoDia();