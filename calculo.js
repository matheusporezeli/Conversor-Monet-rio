function Converter() {
    var valorOriginal = document.getElementById("valor").value;
    var moeda1 = document.getElementById("moeda1").value;
    var moeda2 = document.getElementById("moeda2").value;
    var resultado = document.getElementById("resultado");
  
    if (moeda1 === "real") {
      if (moeda2 === "real") {
        resultado.innerHTML = "R$ " + valorOriginal;
      } else if (moeda2 === "dolar") {
        var resultadoD = valorOriginal * 0.19633;
        resultado.innerHTML = "$ " + resultadoD.toFixed(2);
      } else if (moeda2 === "euro") {
        var resultadoE = valorOriginal * 0.19391;
        resultado.innerHTML = "€ " + resultadoE.toFixed(2);
      } else if (moeda2 === "peso") {
        var resultadoP = valorOriginal * 27.92707;
        resultado.innerHTML = "ARS $ " + resultadoP.toFixed(2);
      }
    } else if (moeda1 === "dolar") {
      if (moeda2 === "dolar") {
        resultado.innerHTML = "$ " + valorOriginal;
      } else if (moeda2 === "real") {
        var resultadoR = valorOriginal * 5.0935;
        resultado.innerHTML = "R$ " + resultadoR.toFixed(2);
      } else if (moeda2 === "euro") {
        var resultadoE = valorOriginal * 0.98762;
        resultado.innerHTML = "€ " + resultadoE.toFixed(2);
      } else if (moeda2 === "peso") {
        var resultadoP = valorOriginal * 142.2898;
        resultado.innerHTML = "ARS $ " + resultadoP.toFixed(2);
      }
    } else if (moeda1 === "euro") {
      if (moeda2 === "euro") {
        resultado.innerHTML = "€ " + valorOriginal;
      } else if (moeda2 === "real") {
        var resultadoR = valorOriginal * 5.1562;
        resultado.innerHTML = "R$ " + resultadoR.toFixed(2);
      } else if (moeda2 === "dolar") {
        var resultadoD = valorOriginal * 1.0123;
        resultado.innerHTML = "$ " + resultadoD.toFixed(2);
      } else if (moeda2 === "peso") {
        var resultadoP = valorOriginal * 144.0036;
        resultado.innerHTML = "ARS $ " + resultadoP.toFixed(2);
      }
    } else if (moeda1 === "peso") {
      if (moeda2 === "peso") {
        resultado.innerHTML = valorOriginal;
      } else if (moeda2 === "real") {
        var resultadoR = valorOriginal * 0.03579;
        resultado.innerHTML = "R$ " + resultadoR.toFixed(2);
      } else if (moeda2 === "euro") {
        var resultadoE = valorOriginal * 0.006944;
        resultado.innerHTML = "€ " + resultadoE.toFixed(2);
      } else if (moeda2 === "dolar") {
        var resultadoD = valorOriginal * 0.007028;
        resultado.innerHTML = "$ " + resultadoD.toFixed(2);
      }
    }
  }
  