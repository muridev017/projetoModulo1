function resposta()
{
    var respost = prompt("O que ela irá fazer?")
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
       
    }

    if (respost == 1) {
        alert ("Lana arma várias armadilhas pequenas no entorno, com o passar da noite ela escuta as armadilhas funcionando.")

        location.href = "lana3.html"
       
    } else {
        alert ("Lana vai muito longe em busca do seu alvo.")
        alert ("Quando encontra, ela se depara com um dragão vermelho gigantesco que a faz virar pó com sua baforada.")
        location.href = "gameover.html"
        
    } 
}