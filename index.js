let nomeHeroi = "o super dev"
let xpHeroi = 102000


if(xpHeroi < 1000){
    console.log("Seu Heroi é Ferro")
}else if (xpHeroi >= 1000 && xpHeroi <= 2000) {
    console.log("Seu Heroi é Bronze")
}else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    console.log("Seu Heroi é Prata ")
}else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    console.log("Seu Heroi é Ouro ")
}else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    console.log("Seu Heroi é Platina")
}else if (xpHeroi >= 8001 && xpHeroi <=9000){
    console.log("Seu Heroi é Ascendente")
}else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    console.log("Seu Heroi é Imortal!")   
}else {
    console.log("Radiante")
}