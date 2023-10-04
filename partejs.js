//função que tem como objetivo gerar um número aleatório dentro de um intervalo pré-determinado, ou seja, utilizando os dois parâmetros de entrada como um valor máximo e um valor mínimo.
//o "math.random" retorna um número decimal aleatório no intervalo semiaberto 0 e 1, enquanto o "math.floor" arredonda para um número inteiro o resultado do math.random.

const gerarnumero = (min, max) => Math.floor(math.random() * (max - min + 1))

//função que tem como objetivo "guardar" o número inteiro aleatório gerado anteriormente na função "gerarnumero"

const iniciarjogo = (min, max) => {
    const numerodestino = randomInt(min,max);

//função que irá configurar o ambiente do jogo, aceitando como parâmetro de entrada um número de tentativas, utilizando referências aos elementos HTML no documento que serâo utilizados para 
//interagir com o jogador. Nas três primeiras funções: "botaopalpite","botaoadivinhar", "mensagem", elas estão obtendo como referência elementos HTML com seus repectivos ids: 'palpite','adivinhar' e
// 'mensagem' e armazenando seu respectivo conteúdo nas funções para atualização do conteúdo HTML conforme o jogo avança.

    const jogo = (numerodetentativas) => {
        const botaopalpite = document.getElementById('palpite');
        const botaoadivinhar = document.getElementById('advinhar');
        const mensagem = document.getElementById('mensagem');
        
//função que tem como objetivo obter o valor do campo de entrada "botaoadivinhar", além de convertê-lo em um número inteiro utilizando o "parseInt" e armazenar esse resultado na própria função
// para a realização da seguinte lógica: se o valor adivinhado for exatamente igual ao número gerado anteriorme com a função "gerarnumero" e 'guardado' pela função "iniciarjogo", retorna a mensagem de parabéns com o número de tentativas até o acerto
// ou se o número advinhado for menor que o número correto exibe uma mensagem dando uma dica para "chutar" um valor maior, além de adicionar um evento de clique ao elemento HTML, que quando ocorre a função jogo
// é chamada com 'numerodetentativas + 1', aumentando assim o número de tentativas. A mesma lógica pode ser seguida para o terceiro caso.

        const adivinhar = parseInt(botaoadivinhar.value);
        
        if (adivinhar === numerodestino) {
            mensagem.textContent = `Parabéns! Você acertou em ${numerodetentativas} tentativas.`;
        } else if (adivinhar < numerodestino) {
            mensagem.textContent = 'Tente um número maior.';
            botaoadivinhar.addEventListener('click', () => jogo(numerodetentativas + 1));
        } else {
            mensagem.textContent = 'Tente um número menor.';
            botaoadivinhar.addEventListener('click', () => jogo(numerodetentativas + 1));
        }
    };

//função que tem como objetivo obter referência do elemento HTML, e armazená-lo na variável 'botaoadivinhar', além é claro de configurar o evento de click, no caso quando o botão 'check' é clicado, irá chamar a função 'jogo' e usar como argumento '1', representando uma nova tentativa do usuário.

    const botaoadivinhar = document.getElementById('check');
    botaoadivinhar.addEventListener('click', () => jogo(1));

//função que tem como objetivo tornar o elemento HTML visível, utilizando CSS.

    const gameDiv = document.getElementById('game');
    gameDiv.style.display = 'block';
};

//função que tem como objetivo configurar o evento de clique na modalidade "fácil", chamando a função anteriormente definida "iniciarjogo", para iniciar o jogo com um intervalo de número de 1 a 10.

document.getElementById('facil').addEventListener('click', () => iniciarjogo(1, 10));

