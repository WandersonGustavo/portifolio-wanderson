import{soma} from "../javaScript/math/soma.js" 
import{subtracao} from "../javaScript/math/subtracao.js" 
import{multiplicacao} from "../javaScript/math/multiplicacao.js" 

import{divisao} from "../javaScript/math/divisao.js" 
import{raizQ} from "../javaScript/math/raizQ.js" 
import{media} from "../javaScript/math/media.js" 

import{potencia} from "../javaScript/math/potencia.js" 
import{fatorial} from "../javaScript/math/fatorial.js" 
import{porcentagem} from "../javaScript/math/porcentagem.js" 

export class App{
    static initialize(document){

        const btnCalcular= document.getElementById("btn-calcular");
        const num1 =document.getElementById("num1");
        const num2 =document.getElementById("num2");

        const resultadoSoma= document.getElementById("resultado-soma");
        const resultadoSomaInstead= document.getElementById("resultado-soma-instead");

        const resultadoSubtracao= document.getElementById("resultado-subtracao");
        const resultadoSubtracaoInstead= document.getElementById("resultado-subtracao-instead");

        const resultadoMultiplicacao= document.getElementById("resultado-multiplicacao");
        const resultadoMultiplicacaoInstead= document.getElementById("resultado-multiplicacao-instead");

        const resultadoDivisao= document.getElementById("resultado-divisao");
        const resultadoDivisaoInstead= document.getElementById("resultado-divisao-instead");

        const resultadoPotencia= document.getElementById("resultado-potencia");
        const resultadoPotenciaInstead= document.getElementById("resultado-potencia-instead");

        const resultadoRaizQ= document.getElementById("resultado-raizQ");
        const resultadoRaizQInstead= document.getElementById("resultado-raizQ-instead");

        const resultadoMedia= document.getElementById("resultado-media");
        const resultadoMediaInstead= document.getElementById("resultado-media-instead");

        const resultadoPorcentagem= document.getElementById("resultado-porcentagem");
        const resultadoPorcentagemInstead= document.getElementById("resultado-porcentagem-instead");

        const resultadoFatorial= document.getElementById("resultado-fatorial");
        const resultadoFatorialInstead= document.getElementById("resultado-fatorial-instead");








    }
}
