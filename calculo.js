function Converter() {
    var valorOriginal = document.getElementById("valor").value;
    var moeda1 = document.getElementById("moeda1").value;
    var moeda2 = document.getElementById("moeda2").value;
    var resultado = document.getElementById("resultado");
  
    if (moeda1 === "real") {
      if (moeda2 === "real") {
        resultado.innerHTML = "R$ " + valorOriginal;
      } else if (moeda2 === "dolar") {
        var resultadoD = valorOriginal * 0.1887;
        resultado.innerHTML = "$ " + resultadoD.toFixed(2);
      } else if (moeda2 === "euro") {
        var resultadoE = valorOriginal * 0.189;
        resultado.innerHTML = "€ " + resultadoE.toFixed(2);
      } else if (moeda2 === "peso") {
        var resultadoP = valorOriginal *  29.3772;
        resultado.innerHTML = "ARS $ " + resultadoP.toFixed(2);
      }
    } else if (moeda1 === "dolar") {
      if (moeda2 === "dolar") {
        resultado.innerHTML = "$ " + valorOriginal;
      } else if (moeda2 === "real") {
        var resultadoR = valorOriginal * 5.2997;
        resultado.innerHTML = "R$ " + resultadoR.toFixed(2);
      } else if (moeda2 === "euro") {
        var resultadoE = valorOriginal * 1.0015;
        resultado.innerHTML = "€ " + resultadoE.toFixed(2);
      } else if (moeda2 === "peso") {
        var resultadoP = valorOriginal * 155.69;
        resultado.innerHTML = "ARS $ " + resultadoP.toFixed(2);
      }
    } else if (moeda1 === "euro") {
      if (moeda2 === "euro") {
        resultado.innerHTML = "€ " + valorOriginal;
      } else if (moeda2 === "real") {
        var resultadoR = valorOriginal * 5.2907;
        resultado.innerHTML = "R$ " + resultadoR.toFixed(2);
      } else if (moeda2 === "dolar") {
        var resultadoD = valorOriginal * 0.9983;
        resultado.innerHTML = "$ " + resultadoD.toFixed(2);
      } else if (moeda2 === "peso") {
        var resultadoP = valorOriginal * 155.4253;
        resultado.innerHTML = "ARS $ " + resultadoP.toFixed(2);
      }
    } else if (moeda1 === "peso") {
      if (moeda2 === "peso") {
        resultado.innerHTML = valorOriginal;
      } else if (moeda2 === "real") {
        var resultadoR = valorOriginal * 0.03404 ;
        resultado.innerHTML = "R$ " + resultadoR.toFixed(2);
      } else if (moeda2 === "euro") {
        var resultadoE = valorOriginal * 0.006434;
        resultado.innerHTML = "€ " + resultadoE.toFixed(2);
      } else if (moeda2 === "dolar") {
        var resultadoD = valorOriginal * 0.0064222;
        resultado.innerHTML = "$ " + resultadoD.toFixed(2);
      }
    }
  }
  
