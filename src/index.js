import {
    threeLetterWords, 
    fourLetterWords, 
    fiveLetterFords, 
    sixLetterWords, 
    sevenLetterWords, 
    eightLetterWords, 
    nineLetterWords, 
    tenAndMoreLetterWords
} from './wordlist'

/**
 * Returns randomly generated passphrase
 * @param {number} numberOfWords - number of words in passphrase
 */
export function getPassphrase(numberOfWords) {
    return this.generatePassphrase(numberOfWords, [
        threeLetterWords, fourLetterWords, fiveLetterFords, sixLetterWords,
        sevenLetterWords, eightLetterWords, nineLetterWords, tenAndMoreLetterWords
    ]);
}

/**
 * Returns simple (3-6 letter words) randomly generated passphrase
 * @param {number} numberOfWords - number of words in passphrase
 */
export function getSimplePassphrase(numberOfWords = 4) {
    return this.generatePassphrase(numberOfWords, [threeLetterWords, fourLetterWords, fiveLetterFords]);
}

/**
 * Returns simple (6-9 letter words) randomly generated passphrase
 * @param {number} numberOfWords - number of words in passphrase
 */
export function getStrongPassphrase(numberOfWords = 4) {
    return this.generatePassphrase(numberOfWords, [sixLetterWords, sevenLetterWords, eightLetterWords]);
}

/**
 * Returns simple (8+ letter words) randomly generated passphrase
 * @param {number} numberOfWords - number of words in passphrase
 */
export function getUltimatePassphrase(numberOfWords = 4) {
    return this.generatePassphrase(numberOfWords, [nineLetterWords, tenAndMoreLetterWords]);
}

/**
 * returns generated passphrase for given parameters
 * @param {number} numberOfWords - number of words in passphrase
 * @param {Array} wordArray - array of word arrays
 */
export function generatePassphrase(numberOfWords, wordArrays) {
    const wordArray = [].concat(...wordArrays);
    const passphrase = [];
    for (let i = 0; i < numberOfWords; i++) {
        passphrase.push(wordArray[Math.floor(Math.random() * wordArray.length)]);
    }
    return passphrase.join(' ');
}

