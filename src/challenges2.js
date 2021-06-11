// Desafio 10

function techList(tech, name) {
  // seu código aqui
  let object = {};
  let resultTechList = [];

  if (tech.length > 0) {
    let order = [];
    order = tech.sort();

    for (let indexTechList = 0; indexTechList < tech.length; indexTechList += 1) {
      object = {
        tech: order[indexTechList],
        name,
      };

      resultTechList[indexTechList] = object;
    }
  } else {
    resultTechList = 'Vazio!';
  }

  return resultTechList;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Sheila'));
// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) return ('Array com tamanho incorreto.');
  const prefixo = numeros.slice(0, 2);
  const parte1 = numeros.slice(2, 7);
  const parte2 = numeros.slice(7, 13);
  return `(${prefixo.join('')}) ${parte1.join('')} ${parte2.join('')}`;
}

console.log(generatePhoneNumber([4, 1, 9, 9, 1, 3, 1, 5, 9, 4, 1]));
const nunum = ['4', 1, 9, 9, 1, 3, 1, 5, 9, 4, 1];
console.log(nunum.lenght);

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
