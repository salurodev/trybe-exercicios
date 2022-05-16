//O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

function fatorial (n){
    let resultado = n;
    for ( let i = 1; i < n; i +=1) {
        resultado = resultado * i;
    }
    return resultado;
}
console.log(fatorial(10));
