//constante para armazenar e agrupar as questões
const medio = [
  {
    questao: `"O homem é, por natureza, um animal político."`,
    nome: "Aristóteles",
  },
  { 
    questao: `"Só sei que nada sei"`, 
    nome: "Sócrates" 
  },
  {
    questao: `"Eu só deixo o catete morto"`,
    nome: "Getúlio Vargas",
    apelido: "Vargas",
  },
  {
    questao: `"Independência ou morte!"`,
    nome: "Dom Pedro I",
    apelido: "Dom Pedro",
  },
  {
    questao: `"Tente mover o mundo, mas comece movendo a si mesmo."`,
    nome: "Arístocles",
    apelido: "Platão",
  },
  {
    questao: `"Aquilo que se faz por amor está sempre além do bem e do mal."`,
    nome: "Friedrich Nietzsche",
    apelido: "Nietzsche",
  },
  {
    questao: `"Uma vida não examinada não merece ser vivida."`,
    nome: "Arístocles",
    apelido: "Platão",
  },
  {
    questao: `"Acredite em milagres, mas não dependa deles."`,
    nome: "Immanuel Kant",
    apelido: "Kant",
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