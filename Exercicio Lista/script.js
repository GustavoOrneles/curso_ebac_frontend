$(document).ready(function(){
    $('#taskForm').submit(function (e) {
        e.preventDefault();
        const taskName = $('#NomeTarefa').val();

        if (taskName) {
            $('#TarefasLi').append(`<li>${taskName}</li>`);
            $('#NomeTarefa').val('');
        }
    });

    $('#TarefasLi').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
