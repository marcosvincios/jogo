//função que tem como objetivo gerar um número aleatório dentro de um intervalo pré-determinado, ou seja, utilizando os dois parâmetros de entrada como um valor máximo e um valor mínimo.
//o "math.random" retorna um número decimal aleatório no intervalo semiaberto 0 e 1, enquanto o "math.floor" arredonda para um número inteiro o resultado do math.random.

const numeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


//função que tem como objetivo "guardar" o número inteiro aleatório gerado anteriormente na função "numeroAleatório"

const iniciarJogo = (min, max) => {
    const numeroAlvo = numeroAleatorio(min, max);

//função que irá configurar o ambiente do jogo, aceitando como parâmetro de entrada um número de tentativas, utilizando referências aos elementos HTML no documento que serâo utilizados para 
//interagir com o jogador. Nas três primeiras funções: "botaoVerificar","entradaTentativa", "mensagem", elas estão obtendo como referência elementos HTML com seus repectivos ids: 'verificar' e
// 'mensagem' e armazenando seu respectivo conteúdo nas funções para atualização do conteúdo HTML conforme o jogo avança.

const jogarJogo = (tentativas) => {
    const botaoVerificar = document.getElementById('verificar');
    const entradaTentativa = document.getElementById('tentativa');
    const mensagem = document.getElementById('mensagem');
        
//função que tem como objetivo obter o valor do campo de entrada "entradaTentativa", além de convertê-lo em um número inteiro utilizando o "parseInt" e armazenar esse resultado na própria função
// para a realização da seguinte lógica: se o valor adivinhado for exatamente igual ao número gerado anteriorme com a função "numeroAleatorio" e 'guardado' pela função "iniciarjogo", retorna a mensagem de parabéns com o número de tentativas até o acerto
// ou se o número advinhado for menor que o número correto exibe uma mensagem dando uma dica para "chutar" um valor maior, além de adicionar um evento de clique ao elemento HTML, que quando ocorre a função jogarJogo
// é chamada com 'tentativas + 1', aumentando assim o número de tentativas. A mesma lógica pode ser seguida para o terceiro caso. fazendo também referências a elementos CSS.

const tentativa = parseInt(entradaTentativa.value);
        
if (tentativa === numeroAlvo) {
    mensagem.textContent = `Parabéns! Você acertou em ${tentativas} tentativas.`;
    mensagem.classList.remove("tente-novamente", "tente-maior", "tente-menor");
  mensagem.classList.add("acertou");
} else if (tentativa < numeroAlvo) {
    mensagem.textContent = 'Tente um número maior.';
    mensagem.classList.remove("acertou", "tente-novamente", "tente-menor");
    mensagem.classList.add("tente-maior");
    botaoVerificar.addEventListener('click', () => jogarJogo(tentativas + 1));
} else {
    mensagem.textContent = 'Tente um número menor.';
    mensagem.classList.remove("acertou", "tente-novamente", "tente-maior");
  mensagem.classList.add("tente-menor");
    botaoVerificar.addEventListener('click', () => jogarJogo(tentativas + 1));
}
};

//função que tem como objetivo obter referência do elemento HTML, e armazená-lo na variável 'botaoVerificar', além é claro de configurar o evento de click, no caso quando o botão 'verificar' é clicado, irá chamar a função 'jogarJogo' e usar como argumento '1', representando uma nova tentativa do usuário.

    const botaoVerificar = document.getElementById('verificar');
    botaoVerificar.addEventListener('click', () => jogarJogo(1));

//função que tem como objetivo tornar o elemento HTML visível, utilizando CSS.

    const containerJogo = document.getElementById('jogo');
    containerJogo.style.display = 'block';
};

//função que tem como objetivo configurar o evento de clique na modalidade "fácil", chamando a função anteriormente definida "iniciarjogo", para iniciar o jogo com um intervalo de número de 1 a 10.
//a mesma justificativa vale para as outras duas linhas.
document.getElementById('facil').addEventListener('click', () => iniciarJogo(1, 10));
document.getElementById('medio').addEventListener('click', () => iniciarJogo(1, 50));
document.getElementById('dificil').addEventListener('click', () => iniciarJogo(1, 100));














    
