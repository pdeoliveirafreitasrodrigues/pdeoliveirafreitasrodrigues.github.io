function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('themeButton');

    if (body.classList.contains('dark-mode')) {
        themeButton.innerHTML = 'Light Mode';
    } else {
        themeButton.innerHTML = 'Dark Mode';
    }
}
function ex01() {
    let n1 = Math.abs(prompt('Insira a nota 01'))
    let n2 = Math.abs(prompt('Insira a nota 02'))
    let n3 = Math.abs(prompt('Insira a nota 03'))

    let media = (n1 + n2 + n3) / 3
    let mediaDeci = media.toFixed(1)
    alert('A média é: ' + mediaDeci)
}
function ex02() {
    let temperatura = Math.abs(prompt('Digite uma temperatura em graus Celsius: '))
    let faren = (temperatura * 9 / 5) + 32
    let farenDec = faren.toFixed(2)
    alert('A conversão de Celsius para Farenheit é : ' + farenDec + 'Fº')
}
function ex03() {
    let largura = Math.abs(prompt('Digite a largura: '))
    let altura = Math.abs(prompt('Digite a altura: '))

    let area = largura * altura
    let areaDec = area.toFixed(2)
    alert('A área do retângulo é : ' + areaDec + 'm²')
}
function ex04() {
    let peso = Math.abs(prompt('Digite o peso: '))
    let altura = Math.abs(prompt('Digite a altura: '))

    let imc = peso / (altura * altura)
    let imcDec = imc.toFixed(1)
    alert('Seu imc é : ' + imcDec)
}
function ex05() {
    let hora = Math.abs(prompt('Informe uma quantidade de Horas para converter: '))
    let minutos = hora * 60;

    alert(hora + ' hora(s) equivalem a ' + minutos.toFixed(2) + ' minutos')
}
function ex06() {
    let nome = prompt('Digite o nome: ')
    let sobrenome = prompt('Digite o sobrenome: ')
    alert('Olá ' + nome + ' ' + sobrenome)
}
function ex07() {
    let texto = prompt('Digite uma palavra ou frase: ')
    alert('Sua String contém (considerando espaços) ' + texto.length + " caracteres!")
}
function ex08() {
    let texto = prompt('Digite uma palavra ou frase: ')
    alert(texto.toUpperCase())
}
function ex09() {
    let texto = prompt('Digite uma palavra ou frase: ')

    alert(texto.substring(0, 3))
}
function ex10() {
    let texto = prompt('Digite uma palavra ou frase: ')
    alert(texto.replaceAll("a", "4").replaceAll("i", "1").replaceAll("e", "&").replaceAll("o", "8").replaceAll("u", "()"))
}

// EXERCÍCIOS DIA 11/07/2023

function ex11() {
    let num = Math.abs(prompt('Informe um número: '))
    if (num > 0 || num < 0) {
        if (num % 2 == 0) {
            alert('O número ' + num + ' é par!')
        } else {
            alert('O número ' + num + ' é ímpar!')
        }
    } else {
        alert('Informe um número seu animal')
    }
}


function ex12() {
    let num = Math.abs(prompt('Informe um valor de produto: '))
    let numDesconto = num * 0.9;
    alert('Aplicando 10% de desconto no valor R$' + num.toFixed(2) + ' o valor vai para R$' + numDesconto.toFixed(2))
}


function ePrimos(num) {

    if (num < 2) {
        return false
    }

    for (i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}
function ex13() {
    let numeru = Math.abs(prompt('Informe um numero: '))
    let ePrimo = ePrimos(numeru)
    if (ePrimo == true) {
        alert('O número ' + numeru + ' é primo.')
    } else {
        alert('O número ' + numeru + ' não é primo.')
    }
}


function ex14() {
    let idade = Math.abs(prompt('Informe sua idade: '))
    diasIdade = idade * 365.25

    alert('Sua idade em dias (considerando anos bissextos) é ' + diasIdade)
}


function ex15() {
    let telefone = prompt('Informe seu teleone com DDD: ')
    let ddd = 0
    let primeiraPart = 0
    let segundaPart = 0
    let numero = ''

    if (telefone.length == 12) {
        ddd = telefone.substring(1, 3)
        primeiraPart = telefone.substring(3, 8)
        segundaPart = telefone.substring(8, 12)
        numero = '(' + ddd + ')' + primeiraPart + '-' + segundaPart
    } else if (telefone.length == 11) {
        ddd = telefone.substring(0, 2)
        primeiraPart = telefone.substring(2, 7)
        segundaPart = telefone.substring(7, 11)
        numero = '(' + ddd + ')' + primeiraPart + '-' + segundaPart
    } else {
        numero = 'Informe um número válido'
    }

    alert(numero)
}


function ex16() {
    const nums = [];
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            nums.push(' ' + i)
        }
    }
    alert(nums)
}


function ex17() {
    const notas = [];

    for (i = 1; i <= 3; i++) {
        let nota = Number(prompt('Informe uma nota: '))
        if (nota >= 0 && nota <= 10) {
            notas.push(nota)
        } else {
            alert('Nota inválida')
            i--
        }
    }
    alert("Média : " + ((notas[1] + notas[2] + notas[3]) / 3))
}


function ex18() {
    const nums = [];
    for (i = 10; i >= 1; i--) {
        nums.push(' ' + i)
    }
    alert(nums)
}


function ex19() {
    let frase = prompt('Informe uma palavra ou frase: ')
    let letra = prompt('Informe uma letra para ver se está na frase: ')
    if (frase.search(letra) >= 0) {
        alert('Tem a letra ' + letra)
    } else {
        alert('Não tem a letra ' + letra)
    }
}


function ex20() {
    let frase = prompt('Informe uma palavra ou frase: ')
    let letras = []
    for (let letra of frase) {
        letras.push(letra.toUpperCase())
    }
    alert(letras)
}


function ex21() {
    const nums = [];
    for (i = 1; i <= 10; i++) {
        if (!(i % 2 == 0)) {
            nums.push(' ' + i)
        }
    }
    alert(nums)
}


function ex22() {
    let nums = [1, 15, 36, 49, 3, 17, 18, 69, 99, 259]
    let soma = 0

    for (i = 0; i < nums.length; i++) {
        soma += nums[i]
    }

    alert('A media do vetor [' + nums + '] é ' + soma / nums.length)
}


function ex23() {
    const min = 1
    const max = 100
    let numSorteado = Math.floor(Math.random() * (max - min + 1)) + min
    let sugestao = null
    let control = false
    do {
        sugestao = Number(prompt('Acerte o número: '))
        if (isNaN(sugestao)) {
            alert('Por favor, insira um número válido.');
        } else if (numSorteado === sugestao) {
            control = true;
            alert('Você acertou!! O número sorteado era ' + numSorteado + ' e você indicou o número ' + sugestao);
        } else if (sugestao < numSorteado) {
            alert('Você errou!! O número em questão é maior que o seu.');
        } else {
            alert('Você errou!! O número em questão é menor que o seu.');
        }
    } while (control == false)
}


function ex24() {
    const min = 1
    const max = 100
    nums = []
    let soma = 0

    for (i = 0; i < 101; i++) {
        nums.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }

    nums.forEach(numero => {
        soma += numero
    })

    alert(nums + ' ---------> A soma é ' + soma)
}


function ex25() {
    const sequencia = [0, 1]
    for (i = 2; i <= 10; i++) {
        let a = sequencia[i - 1]
        let b = sequencia[i - 2]
        sequencia.push(a + b)
    }
    alert('Fibonacci: ' + sequencia)
}


function ex26() {
    let maiorNumero = 0;
    let numero;

    while (true) {
        numero = parseInt(prompt("Digite um número inteiro (digite 0 para sair):"));

        if (numero === 0) {
            break;
        }

        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }

    alert(maiorNumero + ' é o maior número informado!')
}


function ex27() {
    const validador = "profr1201";
    let senha = "";

    do {
        senha = prompt("Digite a senha:");

    } while (senha !== validador);

    alert("Senha correta!");
}


function ex28() {
    const palavra = prompt("Digite uma palavra:");
    let contador = 0;

    for (let letra of palavra) {
        if (letra.toLowerCase() === "a") {
            contador++;
        }
    }

    alert("A quantidade de letras 'a' na palavra é: " + contador);

}


function ex29() {
    let nums = []

    for (i = 0; i <= 10; i++) {
        if (ePrimos(i) == true) {
            nums.push(i)
        }
    }
    alert(nums)
}


function ex30() {
    let numero = 1;
    let soma = 0;

    while (numero <= 50) {
        if (numero % 2 === 0) {
            soma += numero;
        }
        numero++;
    }

    alert("A soma dos números pares de 1 a 50 é: " + soma);

}

