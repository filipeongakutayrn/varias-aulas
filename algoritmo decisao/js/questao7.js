let Numero1 = prompt('Informe o Número 1');
Numero1 = parseFloat(Numero1);
let maior = Numero1;
let menor = Numero1;

let Numero2 = prompt('Informe o Número 2');
Numero2 = parseFloat(Numero2);
if (Numero2 > maior) {
    maior = Numero2;
} else{
    menor = Numero2;
}

let Numero3 = prompt('Informe o Número 3');
Numero3 = parseFloat(Numero3);
if (Numero3 > maior) {
    maior = Numero3;
} else if (Numero3 < menor){
    menor = Numero3;
}

alert('Maior : ' + maior + '\nMenor : ' + menor);