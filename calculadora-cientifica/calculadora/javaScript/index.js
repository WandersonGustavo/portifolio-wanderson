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


        btnCalcular.addEventListener("click", () => {

            resultadoDivisao.innerHTML = divisao(num1.value, num2.value);
            resultadoDivisaoInstead.innerHTML = divisao(num2.value, num1.value);

            resultadoFatorial.innerHTML = fatorial(num1.value);
            resultadoFatorialInstead.innerHTML = fatorial(num2.value);

            resultadoMedia.innerHTML = media(num1.value, num2.value);
            resultadoMediaInstead.innerHTML = media(num2.value, num1.value);

            resultadoMultiplicacao.innerHTML = multiplicacao(num1.value, num2.value);
            resultadoMultiplicacaoInstead.innerHTML = multiplicacao(num2.value, num1.value);

            resultadoPorcentagem.innerHTML = porcentagem(num1.value, num2.value) + "%";
            resultadoPorcentagemInstead.innerHTML = porcentagem(num2.value, num1.value) + "%";

            resultadoPotencia.innerHTML = potencia(num1.value, num2.value);
            resultadoPotenciaInstead.innerHTML = potencia(num2.value, num1.value);

            resultadoRaizQ.innerHTML = raizQ(num1.value);
            resultadoRaizQInstead.innerHTML = raizQ(num2.value);

            resultadoSoma.innerHTML = soma(num1.value, num2.value);
            resultadoSomaInstead.innerHTML = soma(num2.value, num1.value);

            resultadoSubtracao.innerHTML = subtracao(num1.value, num2.value);
            resultadoSubtracaoInstead.innerHTML = subtracao(num2.value, num1.value);
            
        });

    }
}
