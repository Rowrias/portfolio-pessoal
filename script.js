// Função que faz som quando clica na imagem da pasta
document.querySelector('#pasta').addEventListener('click', () => {
    var audio1 = new Audio();
    audio1.src = "audio/pasta.mp3";
    audio1.play();
})

document.querySelector('#sino').addEventListener('click', () => {
    var audio2 = new Audio();
    audio2.src = "audio/bell.mp3";
    audio2.play();
})
