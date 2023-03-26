function contarVogais(palavra) {

  if (typeof palavra !== "string") {
    return "Entrada inválida: informe uma string";
  }
  
  let vogais = ["a", "e", "i", "o", "u"];
  let count = 0;
  
  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
      count++;
    }
  }
  
  if (count === 0) {
    return "Não há vogais na palavra";
  }
  
  return count;
}

console.log(contarVogais("Hello"));
console.log(contarVogais("abc"));
console.log(contarVogais(1234));
