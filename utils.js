// Função para gerar um número aleatório para usar como índice para pegar questões aleatórias
const numeroAleatorio = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

// Função recursiva para pegar números aleatórios, garantindo que sejam diferentes
const questoesSelecionadas = (
    maximoQuestao = 0,
    passos = 0,
    selecionadas = []
) => {
    if (selecionadas.length === passos) {
        return selecionadas;
    }

    const posicaoQuestao = numeroAleatorio(0, maximoQuestao);

    if (selecionadas.includes(posicaoQuestao)) {
        return questoesSelecionadas(maximoQuestao, passos, selecionadas);
    }

    const novasQuestoes = [...selecionadas, posicaoQuestao];
    return questoesSelecionadas(maximoQuestao, passos, novasQuestoes);
};

// Função para definir as questões exibidas no modo escolhido
const definirQuestoes = (questoes = [], qEscolhidas = [], indice = 0) => {
    if (indice < qEscolhidas.length) {
        document.getElementById(`questao${indice + 1}`).innerText = questoes[qEscolhidas.slice(indice, indice + 1)].questao;
        definirQuestoes(questoes, qEscolhidas, indice + 1);
    }
}; 

// Função para mapear os índices selecionados aos elementos originais
const usarIndices = (listaOriginal, indices) => indices.map((index) => listaOriginal[index]);

// Função para verificar se a resposta da pergunta é igual à fornecida pelo usuário
const verificarResposta = (resposta, questao) => (palpite) => {
    if ( // Deixa as strings em mínsculo e remove espaços em branco no ínicio e no fim
        `${resposta[questao - 1].nome}`.toLowerCase().trim() === `${palpite}`.toLowerCase().trim() ||
        `${resposta[questao - 1].apelido}`.toLowerCase().trim() === `${palpite}`.toLowerCase().trim()
    )
        return "✔️ Parabéns, você acertou!!!";
    else return "❌ Você errou, tente novamente.";
};

 // Função para verificar e exibir a mensagem de feedback
const verificar = (output, input) => (func) => {
    const messagem = func(document.getElementById(input).value);
    document.getElementById(output).innerHTML = messagem;
  };