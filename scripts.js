document.getElementById('verificarBtn').addEventListener('click', function() {
    const campoA = document.getElementById('a').value;
    const campoB = document.getElementById('b').value;

    const mensagemA = document.querySelector('.mensagem');
    const mensagemB = document.querySelector('.mensagem-');

    mensagemA.style.display = "none";
    mensagemB.style.display = "none";

    if (campoB > campoA) {
        mensagemA.style.display = "block";
    } else if (campoA > campoB) {
        mensagemB.style.display = "block";
    }
});
