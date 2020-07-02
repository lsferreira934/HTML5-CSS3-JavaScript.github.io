function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msg2 = document.getElementById('msg2')

    today = new Date();
    let hora = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    setTimeout('carregar()', 500);

    let mensagem = ''
    msg.innerHTML = `Agora são <strong>${hora}:${m}:${s}</strong> horas.`
    
    

    if (hora >= 6 && hora <= 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e0ad1a'
        mensagem = 'uma ótima <strong>manhã!</strong>'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#e16a11'
        mensagem = ` uma ótima <strong>tarde!</strong>`
        
    } else if (hora >= 18 && hora < 00) {
        img.src = 'fotonoite.png'
        document.body.style.background = '#604461'
        mensagem = 'uma ótima <strong>noite!</strong>'

    } else if (hora >= 00 && hora < 6){
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#424242'
        mensagem = 'uma ótima <strong>madrugada!</strong>'
    }

    msg2.innerHTML = `Tenha ${mensagem}`
}