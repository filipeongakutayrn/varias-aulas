let letra = prompt('Digite uma letra do Alfabeto');

switch (!isNaN(letra) || letra) {
    case true:
        alert('Não pertence ao Alfabeto');
        break
    case 'a': case 'e': case 'i': case 'o': case 'u':
        alert('Você inseriu uma VOGAL');
        break;
    default:
        alert('Você inseriu uma CONSOANTE');
}
