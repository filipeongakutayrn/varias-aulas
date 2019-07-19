let turno = prompt('Qual o Turno que você estuda ?');


turno = turno.toLowerCase().trim();

switch (turno) {
    case 'm':
        alert('Bom dia!');
        break;
    case 'v':
        alert('Boa tarde!');
        break;
    case 'n':
        alert('Boa noite!');
    default:
        alert('Opção inválida');

}
