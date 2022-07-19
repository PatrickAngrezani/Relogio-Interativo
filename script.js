function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("img");
  var data = new Date();
//   var hora = data.getHours();
  var hora = 3
  var minutos = data.getMinutes();
  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`;

  if (hora >= 0 && hora < 5) {
    // madrugada
    img.src = '../ex001/imagem/madrugada1.png'
    document.body.style.background = '#1f1c23'
    saudacao.innerHTML = "Bom descanso"
  } else if (hora >= 5 && hora < 12 ) {
    // manha
    img.src = '../ex001/imagem/manha1.png'
    document.body.style.background = '#f0be92'
    saudacao.innerHTML = "Tenha um ótimo dia!"
  } else if (hora >= 12 && hora < 18 ) {
    // tarde
    img.src = '../ex001/imagem/tarde1.png'
    document.body.style.background = '#619ff2'
    saudacao.innerHTML = "Boa tarde"
  } else {
    // noite
    img.src = '../ex001/imagem/noite1.png'
    document.body.style.background = '#010340'
    saudacao.innerHTML = "Boa noite"
  }

}
