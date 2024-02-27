$(document).ready(function() {
    $('#telefone').mask('(00) 0 0000-0000');

    $('#CEP').mask('00000-000')

    $('#CPF').mask('000.000.000-00')

});


$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
        veiculoDeInteresse: {
            required: false
        }
    },
    messages: {
        nome: 'Por favor insira o seu nome',
        mensagem: 'Por favor insira uma mensagem'
    }
});