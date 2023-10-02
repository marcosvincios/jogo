//função que tem como objetivo gerar um número aleatório dentro de um intervalo pré-determinado, ou seja, utilizando os dois parâmetros de entrada como um valor máximo e um valor mínimo.
//o "math.random" retorna um número decimal aleatório no intervalo semiaberto 0 e 1, enquanto o "math.floor" arredonda para um número inteiro o resultado do math.random.
const gerarnumero = (min, max) => Math.floor(math.random() * (max - min + 1))
//função que tem como objetivo "guardar" o número inteiro aleatório gerado anteriormente na função "gerarnumero"
const iniciarjogo = (min, max) => {
    const numerodestino = randomInt(min,max);
//função que irá configurar o ambiente do jogo, aceitando como parâmetro de entrada um número de tentativas, utilizando referências aos elementos HTML no documento que serâo utilizados para 
//interagir com o jogador. Até o momento, só foram pensados o botão para verificar os palpites e o campo de entrada onde o usuário irá digitar os palpites.
    const jogo = (numerodetentativas) => {
        const guessButton = document.getElementById('check');
        const guessInput = document.getElementById('guess');

}