//constante para armazenar e agrupar as questões
const medio = [
  {
    questao: `"Só há um caminho para a felicidade. Não nos preocuparmos com coisas que ultrapassam o poder da nossa vontade."`,
    nome: "Epicuro de Samos",
    apelido: "Epicuro",
  },
  {
    questao: `"O mundo é um livro, e quem fica sentado em casa lê somente uma página."`,
    nome: "Agostinho de Hipona",
    apelido: "Santo Agostinho",
  },
  {
    questao: `"A suprema arte da guerra é derrotar o inimigo sem lutar."`,
    nome: "Sun Wu",
    apelido: "Sun Tzu",
  },
  {
    questao: `"Tudo o que somos é resultado do que pensamos."`,
    nome: "Sidarta Gautama",
    apelido: "Buda",
  },
  {
    questao: `"O homem inteligente aprende com seus próprios sofrimentos; O homem sábio aprende com os sofrimentos alheios."`,
    nome: "Arístocles",
    apelido: "Platão",
  },
  {
    questao: `"Aquilo que se faz por amor está sempre além do bem e do mal."`,
    nome: "Friedrich Nietzsche",
    apelido: "Nietzsche",
  },
  {
    questao: `"É pelas própria virtudes que se é mais bem castigado."`,
    nome: " Friedrich Nietzsche",
    apelido: "Nietzsche",
  },
  {
    questao: `"Há duas coisas infinitas: o universo e a tolice dos homens."`,
    nome: "Albert Einstein",
    apelido: "Einstein",
  },
  {
    questao: `"Quem pensa pouco, erra muito."`,
    nome: "Leonardo da Vinci",
    apelido: "Da Vinci",
  },
  {
    questao: `"O diabo pode citar as Escrituras quando isso lhe convém."`,
    nome: "William Shakespeare",
    apelido: "Shakespeare",
  },
  {
    questao: `"Está morto: podemos elogiá-lo à vontade."`,
    nome: "Joaquim Maria Machado de Assis",
    apelido: "Machado de Assis",
  },
  {
    questao: `"Uma mudança sempre deixa o caminho aberto para outras."`,
    nome: "Nicolau Maquiavel",
    apelido: "Maquiavel",
  },
];
// Função para armazenar os parâmetros em uma constante e exibir as respectivas questões
const questoesEscolhidas = questoesSelecionadas(
  medio.length - 1,
  (quantidadeQuestoes = 6)
);
  
// Função para pegar os índices das questões selecionadas
const pegarIndices = usarIndices(medio, questoesEscolhidas);

// Funções para exibir as respostas das questões
const exibir1 = verificar("output1", "inputq1");
const exibir2 = verificar("output2", "inputq2");
const exibir3 = verificar("output3", "inputq3");
const exibir4 = verificar("output4", "inputq4");
const exibir5 = verificar("output5", "inputq5");
const exibir6 = verificar("output6", "inputq6"); 

// Adiciona um evento de clique ao botão "Enviar Resposta"
document.getElementById("enviarRespostaID").addEventListener("click", () => {
  // Exibe as respostas das questões
  exibir1(verificarResposta(pegarIndices, 1));
  exibir2(verificarResposta(pegarIndices, 2));
  exibir3(verificarResposta(pegarIndices, 3));
  exibir4(verificarResposta(pegarIndices, 4));
  exibir5(verificarResposta(pegarIndices, 5));
  exibir6(verificarResposta(pegarIndices, 6)); 
});

// Define as questões iniciais
definirQuestoes(medio, questoesEscolhidas);
