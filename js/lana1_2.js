function resposta()
{
    var respost = prompt("O que ela irá fazer?")
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
       
    }

    if (respost == 1) {
        alert ("Lana fica para atacar o bisão triste, mas seu coração doce a impede de sacrificar tal animal.")
        
        location.href = "lana2.html"
       
    } else {
        alert ("Voltando para casa rapidamente, Lana foi cercada por 25 goblins. Sinto muito...")
        
        location.href = "gameover.html"
        
  
    } 
}