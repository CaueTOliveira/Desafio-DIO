//Desafio Classificador de nivel de Heroi (iniciante)
let herois = [
    //{ nome: "Zelda", xp: 13 },
    //{ nome: "Link", xp: 1500 },
    //{ nome: "Ganondorf", xp: 2500 },
    //{ nome: "Impa", xp: 5500 },
    //{ nome: "Midna", xp: 8000 },
    //{ nome: "Darunia", xp: 9500 },
    { nome: "Nabooru", xp: 10500 }
];

for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let rank = "";



if(heroi.xp <=1000){
    rank = "Ferro"
}
else if(heroi.xp >= 1001 && heroi.xp <= 2000){
    rank = "Bronze"
}
else if(heroi.xp >= 2001 && heroi.xp <= 5000){
    rank = "Prata"
}
else if(heroi.xp >= 5001 && heroi.xp <= 7000){
    rank = "Ouro"
}
else if(heroi.xp >= 7001 && heroi.xp <= 8000){
    rank = "Platina"
}
else if(heroi.xp >= 8001 && heroi.xp <= 9000){
    rank = "Ascendente"
}
else if(heroi.xp >= 9001 && heroi.xp <= 10000){
    rank = "Imortal"
}
else{
    heroi.xp >=10001
    rank = "Radiante"
}
   
console.log("O Heroi do nome " + heroi.nome + " esta no nivel de " + heroi.xp + " no rank " + rank)} 