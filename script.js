// Função para tocar música ao clicar na foto
document.querySelectorAll(".polaroid").forEach(photo => {
    photo.addEventListener("click", () => {
        const audio = document.querySelector("audio");
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
function atualizarContador() {
    const agora = new Date();
    const anoAtual = agora.getFullYear();
    let aniversario = new Date(anoAtual, 2, 16); // Março é o mês 2 (zero-based)

    // Se já passou, ajusta para o próximo ano
    if (agora > aniversario) {
        aniversario.setFullYear(anoAtual + 1);
    }

    const diferenca = aniversario - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias.toString().padStart(2, "0");
    document.getElementById("horas").innerText = horas.toString().padStart(2, "0");
    document.getElementById("minutos").innerText = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").innerText = segundos.toString().padStart(2, "0");

    setTimeout(atualizarContador, 1000);
}

atualizarContador();
