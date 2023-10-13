//constante para armazenar e agrupar as questões
const faceis = [
  {
    questao: `"O homem é, por natureza, um animal político."`,
    nome: "Aristóteles",
  },
  { questao: `"Só sei que nada sei"`, nome: "Sócrates" },
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

//função para gerar um número aleatorio para usar de indice para pegar questões aleatorias
const numeroAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//função recursiva para impedir que as questões sorteadas sejam iguais
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

//função para armazenar os parametros em uma constante e exibir as respectivas questões
const definirQuestoes = (questoes = faceis, quantidadeQuestoes = 4) => {
  const questoesEscolhidas = questoesSelecionadas(
    questoes.length - 1,
    quantidadeQuestoes
  );
  console.log(questoesEscolhidas);
  document.getElementById("questao1").innerText =
    questoes[questoesEscolhidas.slice(0, 1)].questao;
  document.getElementById("questao2").innerText =
    questoes[questoesEscolhidas.slice(1, 2)].questao;
  document.getElementById("questao3").innerText =
    questoes[questoesEscolhidas.slice(2, 3)].questao;
  document.getElementById("questao4").innerText =
    questoes[questoesEscolhidas.slice(3, 4)].questao;
};
const definirQuestoesCopia = [{...definirQuestoes}]

//função para verificar se a resposta da pergunta é igual a fornecida pelo usuário
const verificarResposta = (resposta, questao) => (palpite) => {
  if (
    resposta[questao - 1].nome === palpite ||
    resposta[questao - 1].apelido === palpite
  )
    return "Parabéns, você acertou!!!";
  else return "Você errou, tente novamente.";
};

// const verificar = (output,input) => (x) => {
//   const verify = x(document.getElementById(output).value);
//   document.getElementById(input).innerText = verify;
// };
// // const verificarQuestao1 = verificarResposta(definirQuestoesCopia,1)
// // const exibir1 = verificar('output1','input1')

// // const pegarResposta = (input) => document.getElementById(input).value;
// // const enviarResposta = (input1 = pegarResposta("input1")) => {
// //   verificarResposta(input1);
// // };
// document.getElementById("enviarRespostaID").addEventListener('click', ()=> exibir1(verificarResposta(definirQuestoesCopia,1)));

definirQuestoes();
