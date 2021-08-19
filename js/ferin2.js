function resposta()
{
    var respost = prompt("O que ele irá fazer?")
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
       
    }

    if (respost == 1) {
        alert ("A árvore que ele acampou era um Ent, muito amigável por sinal, pois se apresentou e conversaram")
        alert ("O Ent velho então resolveu dar uma carona a Ferin de volta a sua cabana")
        location.href = "ferin3.html"
       
    } else {
        alert ("Um bando de goblins cerca de 45, cercaram Ferin no meio do caminho, ele não teve nem chance.")
        location.href = "gameover.html"
    } 
}