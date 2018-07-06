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
 * @param {boolean} useDashes - if true words are connected with a dash, if false with space
 */
export function getPassphrase(numberOfWords, useDashes = false) {
    return this.generatePassphrase(numberOfWords, useDashes, [
        threeLetterWords, fourLetterWords, fiveLetterFords, sixLetterWords,
        sevenLetterWords, eightLetterWords, nineLetterWords, tenAndMoreLetterWords
    ]);
}

/**
 * Returns simple (3-6 letter words) randomly generated passphrase
 * @param {number} numberOfWords - number of words in passphrase
 * @param {boolean} useDashes - if true words are connected with a dash, if false with space
 */
export function getSimplePassphrase(numberOfWords = 4, useDashes = false) {
    return this.generatePassphrase(numberOfWords, useDashes, [threeLetterWords, fourLetterWords, fiveLetterFords]);
}

/**
 * Returns simple (6-9 letter words) randomly generated passphrase
 * @param {number} numberOfWords - number of words in passphrase
 * @param {boolean} useDashes - if true words are connected with a dash, if false with space
 */
export function getStrongPassphrase(numberOfWords = 4, useDashes = false) {
    return this.generatePassphrase(numberOfWords, useDashes, [sixLetterWords, sevenLetterWords, eightLetterWords]);
}

/**
 * Returns simple (8+ letter words) randomly generated passphrase
 * @param {number} numberOfWords - number of words in passphrase
 * @param {boolean} useDashes - if true words are connected with a dash, if false with space
 */
export function getUltimatePassphrase(numberOfWords = 4, useDashes = false) {
    return this.generatePassphrase(numberOfWords, useDashes, [nineLetterWords, tenAndMoreLetterWords]);
}

/**
 * returns generated passphrase for given parameters
 * @param {number} numberOfWords - number of words in passphrase
 * @param {boolean} useDashes - if true words are connected with a dash, if false with space
 * @param {Array} wordArray - array of word arrays
 */
export function generatePassphrase(numberOfWords, useDashes, wordArrays) {
    const wordArray = [].concat(...wordArrays);
    const passphrase = [];
    for (let i = 0; i < numberOfWords; i++) {
        passphrase.push(wordArray[Math.floor(Math.random() * wordArray.length)]);
    }
    if (useDashes) {
        return passphrase.join('-');
    } else {
        return passphrase.join(' ');
    }
}

