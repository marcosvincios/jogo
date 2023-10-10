//
const verificar = (output) => (x) => {
    const verify = x(document.getElementById("inputq1").value)
    document.getElementById(output).innerHTML = verify
}
const exibir1 = verificar('output1')
const exibir2 = verificar('output2')
//função para verificar se a resposta da pergunta é igual a fornecida pelo usuário, a versão curryficada serve para reutilizar diversas vezes a mesma função de verificação
const verificarResposta = (nome) =>  (apelido) => (palpite) => {
    if (nome === palpite || apelido === palpite) return 'Parabéns, você acertou!!!'
    else return 'Você errou, tente novamente.'
    }
    //constantes das questões utilizando a função verificar resposta
    //questões fáceis
    const questao1facil = verificarResposta('Aristóteles')('Aristóteles')
    const questao2facil = verificarResposta('Sócrates')('Sócrates')
    const questao3facil = verificarResposta('Getúlio Vargas')('Vargas')
    const questao4facil = verificarResposta('Dom Pedro I')('Dom Pedro')
    const questao5facil = verificarResposta('Arístocles')('Platão')
    const questao6e7facil = verificarResposta('Friedrich Nietzsche')('Nietzsche')
    
    
    
    const questao1 = verificarResposta('Ludwig von Mises')('Mises')
    const questao4 = verificarResposta('Heráclito de Efeso')('Heráclito')
    const questao6 = verificarResposta('Agostinho de Hipona')('Santo Agostinho')
    const questao8 = verificarResposta('Buda')('Buda')
    const questao9 = verificarResposta('Oscar Wilde')('Oscar Wilde')
    const questao10e20 = verificarResposta('Nicolau Maquiavel')('Maquiavel')
    const questao14 = verificarResposta('Albert Einstein')('Einstein')
    const questao15 = verificarResposta('Leonardo da Vinci')('Da Vinci')
    const questao16 = verificarResposta('William Shakespeare')('Shakespeare')
    const questao17 = verificarResposta('Joaquim Maria Machado de Assis')('Machado de Assis')
    const questao18 = verificarResposta(`Ch'iu K'ung`)('Confúcio')
    const questao19 = verificarResposta('Sun Wu')('Sun Tzu')

    
