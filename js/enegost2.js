function resposta()
{
    var respost = prompt("O que Enegost deve fazer? Escolha entre 1 ou 2.")
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
       
    }

    if (respost == 1) {
        alert ("Jack fica contente com a hospitalidade do Anão")
        alert ("E muito agradecido pela gentileza! Parabéns!")
        location.href = "enegost3.html"
       
    } else {
        alert ("O humano vai embora.")
        alert ("Enegost passa a noite só")
        alert ("Os dias se passam e...")
        alert ("Sua família demora a voltar, ficando sem alimento por dias. Enegost morreu de fome.")
        location.href = "gameoverEne.html"
  
    } 
    
}