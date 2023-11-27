$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira seu nome',
            email: 'Por favor insira seu email',
            mensagem: 'Insira sua mensagem'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();
            if (camposInvalidos) {
                alert(`Ainda há ${camposInvalidos} campos a serem preenchidos ou incorretos`);
            }
        }
    })
})