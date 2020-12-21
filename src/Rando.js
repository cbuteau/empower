
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export class Rando {
  static select(array) {
    return new Promise(function(resolve, reject) {
        let index = getRandomArbitrary(0, array.length - 1);
        resolve(array[index]);
    });
  }
}
