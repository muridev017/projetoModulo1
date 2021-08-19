function resposta()
{
    var respost = prompt("O que ela deve fazer? Escolha entre 1(Lana ao Sul) ou 2(Lana a Oeste.)")
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
       
    }

    if (respost == 1) {
        location.href = "lana2.html"
       
    } else {
       
        location.href = "lana2_1.html"
  
    } 
}