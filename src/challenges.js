/* eslint-disable guard-for-in */
/* eslint-disable no-unused-expressions */
// Desafio 1
function compareTrue(x, y) {
  if (x && y) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(nomes) {
  const aarr = [];
  return aarr.concat(nomes[0], nomes[nomes.length - 1]);
}

// Desafio 5
function footballPoints(wins, ties) {
  const TotalWins = wins * 3;
  const TotalTies = ties * 1;
  return TotalWins + TotalTies;
}

// Desafio 6
function highestCount(numeros) {
  const max = numeros.reduce((a, b) => Math.max(a, b));
  const QtdRepete = numeros.filter((x) => x === max).length;
  return QtdRepete;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  const distanciaGato1 = Math.abs(cat1 - mouse);
  const distanciaGato2 = Math.abs(cat2 - mouse);
  if (distanciaGato1 > distanciaGato2) {
    return 'cat2';
  } if (distanciaGato2 > distanciaGato1) {
    return 'cat1';
  } if (distanciaGato1 === distanciaGato2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  const arr = [];
  // eslint-disable-next-line no-restricted-syntax
  // for (let index = 0; index < array.length; index += 1) {
  for (const index in array) {
    if (array[index] % 5 === 0 && array[index] % 3 === 0) arr.push('fizzBuzz');
    if (array[index] % 5 !== 0 && array[index] % 3 !== 0) arr.push('bug');
    if (array[index] % 3 === 0) arr.push('fizz');
    if (array[index] % 5 === 0) arr.push('buzz');
  }
  return arr;
}
console.log(fizzBuzz([9, 15, 1, 2]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}
