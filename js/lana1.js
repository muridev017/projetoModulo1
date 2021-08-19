function resposta()
{
    var respost = prompt("O que ela irá fazer?")
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
       
    }

    if (respost == 1) {
        alert ("Lana tenta se aproximar do leão com cuidado porém pisa em um galho seco, que chama atenção do animal que avança nela com grande ferocidade.")

        location.href = "gameover.html"
       
    } else {
        alert ("Lana espera o grande felino sair, porém o cervo também foge.")
        location.href = "lana2.html"
        
  
    } 
}