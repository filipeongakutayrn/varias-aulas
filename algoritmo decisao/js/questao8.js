let ProdutoA = parseFloat(prompt('Informe o Produto mais Barato'));
let Menor = ProdutoA;
let Recomendacao = 'Produto A';

let ProdutoB = parseFloat(prompt('Informe o Produto mais Barato'));
if (ProdutoB < Menor) {
    Menor = ProdutoB;
    Recomendacao = 'Produto B';
}

let ProdutoC = parseFloat(prompt('Informe o Produto mais Barato'));
if (ProdutoC < Menor) {
    Menor = ProdutoC;
    Recomendacao = 'Produto C';
}

alert('Melhor preço : ' + Menor
+ '\nProduto Recomendado : ' + Recomendacao); 