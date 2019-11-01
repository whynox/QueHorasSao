function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

    if (hora >= 6 && hora < 12) {
        // Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e6c791'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#db9b7f'
    } else if (hora >= 18) {
        // Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#1f2340'
    } else {
        // Boa madrugada
        img.src = 'madrugada.png'
        document.body.style.background = '#18181a'
    }
}
