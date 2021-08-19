function resposta()
{
    var respost = prompt("O que Enegost deve fazer? Escolha entre 1 ou 2.")
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
       
    }

    if (respost == 1) {
        alert ("Encontra seu pai no meio do caminho voltando com um cervo e uma pele de um animal feroz que Ferin derrotou.")
        location.href = "enegost4.html"
       
    } else {
        alert ("Foi em direção a sua irmã mas não consegue encontra-la...")
        location.href = "gameover.html"
  
    } 
    
}