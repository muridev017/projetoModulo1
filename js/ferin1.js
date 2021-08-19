function resposta()
{
    var respost = prompt("O que ele irá fazer?")
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
       
    }

    if (respost == 1) {
        location.href = "ferin2.html"
       
    } else {
        alert ("Na volta, Ferin está muito preocupado com o filho.")
        alert ("Ferin cai em um buraco em que esta uma cobra gigante que o engole de uma vez.")
        location.href = "gameover.html"
    } 
}