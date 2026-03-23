'use strict';
console.log('conectado');
function StringTemplate(){
    const nome = 'Francisco' ;
    const disciplina = 'DBW';
    console.log(`Olá,${nome},bem-vindo a ${disciplina}!`) 
}
function Comparacoes(){
    const ValIguais = 5 == '5';
    const ValEstritaIguais = 5 === 5;
    const ValDif = 5 == '6';
    const ValDifeTipo = 5 !== '6';
    const maiorQue = !(5>2);
    console.log(`Valores Iguais :${ValIguais}`);
    console.log(`Valores Iguais em valor e tipo :${ValEstritaIguais}`);
    console.log(`Valores diferentes :${ValDif}`);
    console.log(`Valores diferentes e tipo diferente :${ValDifeTipo}`);
    console.log(`Valores maior que :${maiorQue}`);
}
function Horas(){
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    if(12 < horas < 19){
        console.log(`Boa tarde! Sao ${horas} horas e ${minutos} minutos.`);
    }
    else{
        console.log(`Boa noite!`);
    }
}
function arrayManip(){
    var frase = "DBW e uma disciplina interessante";
    var ArrayFrase = frase.split(" ");
    for (let i = 0; i < ArrayFrase.length; i++){
        console.log(`Posicao ${i} : ${ArrayFrase[i]}`);
    }
    ArrayFrase.forEach((element,index,array)=>{
            array[index] = element.charAt(0).toLowerCase() + element.slice(1).replaceAll("i","w").toUpperCase();
        }
    );

    for (let i = 0; i < ArrayFrase.length; i++){
        console.log(`Posicao ${i} : ${ArrayFrase[i]}`);
    }
}
function somaArrays(){
    const nums = [1,2,3];
    console.log(somaSimples(...nums));
}
function somaSimples(x,y,z){
    return  x + y + z;
}
function formulaUm(){
    formulaUm = [
    {
    piloto: "Schumacher",
    equipa: "Ferrari",
    reformado: true,
    },
    {
    piloto: "Verstappen",
    equipa: "Red Bull",
    reformado: false
    },
    {
    piloto: "Alonso",
    equipa: "Aston Martin",
    reformado: false,
    }
    ]
    for( let i = 0; i<formulaUm.length; i++){
        if(formulaUm[i].reformado){
            console.log(`O piloto ${formulaUm[i].piloto} esta reformado.`);
        }
        else{
            console.log(`O piloto ${formulaUm[i].piloto} esta no ativo.`);
        }
    }
}
