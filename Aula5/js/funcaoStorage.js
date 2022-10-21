/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function teste(){
    
    let entrada = "Fatec Bragança Paulista";
    let saida;

    if (window.localStorage){
        alert("Local Storage disponível");
    } else {
        alert("Local Storage indisponível");
    }

    //grava no local storage

    window.localStorage.setItem("testeJS", entrada);

    //ler do local storage

    saida = window.localStorage.getItem("testeJS");

    saida.replace("Bragança Paulista", "BP");

    window.alert("resultado \n" + saida);

    let vetor = ["FATEC BRAGANÇA PAULISTA", "BRAGANÇA PAULISTA", "SP"];

    window.localStorage.setItem("teste2", vetor);
    alert(vetor[2]);
    vetor2 = window.localStorage.getItem("teste2");
    alert(vetor2);

    //guardar um vetor dentro do local storage
    window.localStorage.setItem("teste3", JSON.stringify(vetor));

    //recuperar vetor do local storage
    let vetor3 = JSON.parse(window.localStorage.getItem("teste3"));
    alert(vetor3[0]);
    
}

function gravar(nome, valorOriginal){
    
    if(window.localStorage){
        valor = JSON.stringify(valorOriginal);
        window.localStorage.setItem(nome,valor);
    } else {
        alert("Armazenamento local indisponível!");
    }
    return null;
    
}

function ler(nome){
    
    if(window.localStorage){
        valor = window.localStorage.getItem(nome);
        valorOriginal = JSON.parse(valor);
        return valorOriginal;
    } else {
        alert("Armazenamento local indisponível!");
    }
    
}

function inicio(){
    
    let matriz = [
        ["Joao", 23, 1.80],
        ["Maria", 18, 1.75]
    ];
    
    let ano = 2022;
    let diaDaSemana = "sexta-feira";
    gravar("PessoaTeste", matriz);
    gravar("AnoAtual", ano);
    gravar("diaSemana", diaDaSemana);
    
}

function fim(){
    
    let m = ler("PessoaTeste");
    let a = ler("AnoAtual");
    let d = ler("diaSemana");
    
    alert("Ano atual "+ a + "\n Dia da semana "+ d);
    
}