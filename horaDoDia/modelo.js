
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var saudacao = ''
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(255, 244, 128)'
        saudacao = 'Bom dia!'
        
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(255, 177, 128)'
        saudacao = 'Boa tarde!'
    }
    else{
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(164, 128, 255)'
        saudacao = 'Boa noite!'
    }
    msg.innerHTML = `${saudacao} Agora são ${hora} horas.`
}

