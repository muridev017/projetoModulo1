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
        alert ("Você por pouco errou o leão, percebendo Ferin, ele o atacou, sem chance de resposta para fugir.")
        location.href = "gameover.html"
        
  
    } 
}