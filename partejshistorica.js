
//função para verificar se a resposta da pergunta é igual a fornecida pelo usuário, a versão curryficada serve para reutilizar diversas vezes a mesma função de verificação
const verificarResposta = (nome) =>  (apelido) => (palpite) => {
    if (nome === palpite || apelido === palpite) return 'Parabéns, você acertou!!!'
    else return 'Você errou, tente novamente.'
    }
    //constantes das questões utilizando a função verificar resposta
    const questao1 = verificarResposta('Ludwig von Mises')('Mises')
    const questao2 = verificarResposta('Aristóteles')('Aristóteles')
    const questao3 = verificarResposta('Sócrates')('Sócrates')
    const questão4 = verificarResposta('Heráclito de Efeso')('Heráclito')
    const questão5e13 = verificarResposta('Friedrich Nietzsche')('Nietzsche')
    const questão6 = verificarResposta('Agostinho de Hipona')('Santo Agostinho')
    const questão7 = verificarResposta('Getúlio Vargas')('Vargas')
    const questão8 = verificarResposta('Buda')('Buda')
    const questão9 = verificarResposta('Oscar Wilde')('Oscar Wilde')
    const questão10e20 = verificarResposta('Nicolau Maquiavel')('Maquiavel')
    const questão11 = verificarResposta('Arístocles')('Platão')
    const questão12 = verificarResposta('Dom Pedro I')('Dom Pedro')
    const questão14 = verificarResposta('Albert Einstein')('Einstein')
    const questão15 = verificarResposta('Leonardo da Vinci')('Da Vinci')
    const questão16 = verificarResposta('William Shakespeare')('Shakespeare')
    const questão17 = verificarResposta('Joaquim Maria Machado de Assis')('Machado de Assis')
    const questão18 = verificarResposta(`Ch'iu K'ung`)('Confúcio')
    const questão19 = verificarResposta('Sun Wu')('Sun Tzu')

    
