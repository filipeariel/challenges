/*Escreva um método que imprima na tela todos os números de 1 a 100. 
Porém, para os números múltiplos de três, imprima a string "Fizz" em vez do número. 
Para múltiplos de cinco imprima a string "Buzz". 
E para números múltiplos tanto de três quanto de cinco, imprima a string “FizzBuzz".*/

function contar() {
    let res = document.getElementById('res')
    res.innerHTML = ''
    for (let c = 1; c <= 100; c++) {
        if (c % 3 == 0 && c % 5 == 0) {
            var str = 'FizzBuzz'
            var neg = str.bold()
            res.innerHTML += `${neg} `
        } else if (c % 3 ==0) {
            res.innerHTML += 'Fizz '
        } else if (c % 5 == 0) {
            res.innerHTML += 'Buzz '
        } else {
            res.innerHTML += `${c} `
        }
    }

}