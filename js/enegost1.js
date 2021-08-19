
function resposta()
{
    var respost = prompt("O que Enegost deve fazer? Escolha entre 1 ou 2.")
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
       
    }

    if (respost == 1) {
        location.href = "enegost2.html"
       
    } else {
        alert ("Encontra elfo chamado Aiwe perto do rio, Aiwe estava vagando pois tinha ser perdido do seu grupo de elfos, os Teleri.")
        alert ("Chegando a floresta um bando de orcs passava por lá e capturou Enegost.")
        alert ("Ele nunca mais foi visto...")
        alert ("Não se sabe sobre Aiwe.")
        location.href = "gameoverEne.html"
  
    } 

}