let resposta = prompt('Digite M ou F');

resposta = resposta.toUpperCase().trim();

switch (resposta) {
    case 'M':
        alert('M - Masculino');
        break;
    case 'F':
        alert('F - Feminino');
        break;
    default:
        alert('Sexo inválido');
}