//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPrime = (num) => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}

export class DiffieHellman {
  constructor(p, g) {
    if (p<1 || g<1) throw new Error('Cannot be less than 1');
    if (!isPrime(p) || !isPrime(g)) throw new Error('Must be prime')
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey<=1) throw new Error('Private key must be larger than 1');
    if (privateKey>=this.p) throw new Error('Please pick a different key')
    return this.g ** privateKey % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
  }
}
