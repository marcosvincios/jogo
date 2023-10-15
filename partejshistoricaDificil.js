//constante para armazenar e agrupar as questões
const dificeis = [
  {
    questao: `"A vida não é um problema a ser resolvido, mas uma realidade a ser experimentada."`,
    nome: "Soren Kierkegaard",
    apelido: "Kierkegaard",
  },
  {
    questao: `"A vida feliz consiste na tranquilidade da mente."`,
    nome: "Marco Túlio Cicero",
    apelido: "Cicero",
  },
  {
    questao: `"A liberdade consiste em fazer o que se deseja."`,
    nome: ".John Stuart Mill",
    apelido: "Stuart Mill",
  },
  {
    questao: `"Se queres prever o futuro, estuda o passado."`,
    nome: "Ch'iu K'ung",
    apelido: "Confúcio",
  },
  {
    questao: `"A ambição é o último recurso do fracassado."`,
    nome: "Oscar Wilde",
    apelido: "Wilde",
  },
  {
    questao: `"Todos veem o que você parece ser, mas poucos sabem o que você realmente é."`,
    nome: "Nicolau Maquiavel",
    apelido: "Maquiavel",
  },
  {
    questao: `"Exige muito de ti e espera pouco dos outros. Assim, evitarás muitos aborrecimentos."`,
    nome: "Ch'iu K'ung",
    apelido: "Confúcio",
  },
  {
    questao: `"Vou-lhe dizer um grande segredo, meu caro. Não espere o juízo final. Ele realiza-se todos os dias."`,
    nome: "Albert Camus",
    apelido: "Camus",
  },
  {
    questao: `"A essência do conhecimento consiste em aplicá-lo, uma vez possuído."`,
    nome: "Ch'iu K'ung",
    apelido: "Confúcio",
  },
  {
    questao: `"Ler fornece ao espírito materiais para o conhecimento, mas só o pensar faz nosso o que lemos."`,
    nome: "John Locke",
    apelido: "Locke",
  },
  {
    questao: `"Todo o conhecimento humano começou com intuições, passou daí aos conceitos e terminou com ideias."`,
    nome: "Immanuel Kant",
    apelido: "Kant",
  },
  {
    questao: `"Não se ensina filosofia; ensina-se a filosofar."`,
    nome: "Immanuel Kant",
    apelido: "Kant",
  },
  {
    questao: `"A filosofia é composta de respostas incompreensíveis para questões insolúveis."`,
    nome: "Henry Brooks Adams",
    apelido: "Henry Adams",
  },
  {
    questao: `"A filosofia que cultivo não é nem tão bárbara nem tão inacessível que rejeite as paixões; pelo contrário, é só nelas que reside a doçura e felicidade da vida."`,
    nome: "René Descartes",
    apelido: "Descartes",
  },
  {
    questao: `"O truque da filosofia é começar por algo tão simples que ninguém ache digno de nota e terminar por algo tão complexo que ninguém entenda."`,
    nome: "Bertrand Arthur William Russell",
    apelido: "Russell",
  },
  {
    questao: `"A pior coisa que pode acontecer a um socialista é ter seu país governado por socialistas que não são seus amigos."`,
    nome: "Ludwig von Mises",
    apelido: "Mises",
  },
];

// Função para armazenar os parâmetros em uma constante e exibir as respectivas questões
const questoesEscolhidas = questoesSelecionadas(
  dificeis.length - 1,
  (quantidadeQuestoes = 8)
);
  
// Função para pegar os índices das questões selecionadas
const pegarIndices = usarIndices(dificeis, questoesEscolhidas);

// Funções para exibir as respostas das questões
const exibir1 = verificar("output1", "inputq1");
const exibir2 = verificar("output2", "inputq2");
const exibir3 = verificar("output3", "inputq3");
const exibir4 = verificar("output4", "inputq4");
const exibir5 = verificar("output5", "inputq5");
const exibir6 = verificar("output6", "inputq6");
const exibir7 = verificar("output7", "inputq7");
const exibir8 = verificar("output8", "inputq8");

// Adiciona um evento de clique ao botão "Enviar Resposta"
document.getElementById("enviarRespostaID").addEventListener("click", () => {
  // Exibe as respostas das questões
  exibir1(verificarResposta(pegarIndices, 1));
  exibir2(verificarResposta(pegarIndices, 2));
  exibir3(verificarResposta(pegarIndices, 3));
  exibir4(verificarResposta(pegarIndices, 4));
  exibir5(verificarResposta(pegarIndices, 5));
  exibir6(verificarResposta(pegarIndices, 6));
  exibir7(verificarResposta(pegarIndices, 7));
  exibir8(verificarResposta(pegarIndices, 8));
});

// Define as questões iniciais
definirQuestoes(dificeis, questoesEscolhidas);
