import chai from "chai";

import * as passphraseGeneratorHR from '../src/index';

let expect = chai.expect;

describe('Function getPassphrase(numberOfWords, useDashes)', () => {
    it('should return string', () => {
        let passphrase = passphraseGeneratorHR.getPassphrase();
        expect(passphrase).to.be.a('string');
    });
    it('should return right amount of words', () => {
        const numberOfWords = 5;
        let passphrase = passphraseGeneratorHR.getPassphrase(numberOfWords);
        let wordArray = passphrase.split(' ');
        expect(wordArray.length).to.equal(numberOfWords);
    });
});

describe('Function getSimplePassphrase(numberOfWords, useDashes)', () => {
    it('should return string', () => {
        let passphrase = passphraseGeneratorHR.getSimplePassphrase();
        expect(passphrase).to.be.a('string');
    });
    it('should return right amount of words', () => {
        const numberOfWords = 5; 
        let passphrase = passphraseGeneratorHR.getSimplePassphrase(numberOfWords);
        let wordArray = passphrase.split(' ');
        expect(wordArray.length).to.equal(numberOfWords);
    });
    it('should return passphrase consisting of words (3-5 letters per word)', () => {
        let passphrase = passphraseGeneratorHR.getSimplePassphrase();
        let wordArray = passphrase.split(' ');
        let index = wordArray.findIndex(word => {
            return word.length > 5 || word.length < 3
        })
        expect(index).to.equal(-1);
    });
});

describe('Function getStrongPassphrase(numberOfWords, useDashes)', () => {
    it('should return string', () => {
        let passphrase = passphraseGeneratorHR.getStrongPassphrase();
        expect(passphrase).to.be.a('string');
    });
    it('should return right amount of words', () => {
        const numberOfWords = 5; 
        let passphrase = passphraseGeneratorHR.getStrongPassphrase(numberOfWords);
        let wordArray = passphrase.split(' ');
        expect(wordArray.length).to.equal(numberOfWords);
    });
    it('should return passphrase consisting of words (6-8 letters per word)', () => {
        let passphrase = passphraseGeneratorHR.getStrongPassphrase();
        let wordArray = passphrase.split(' ');
        let index = wordArray.findIndex(word => {
            return word.length < 6 || word.length > 8
        })
        expect(index).to.equal(-1);
    });
});

describe('Function getUltimatePassphrase(numberOfWords, useDashes)', () => {
    it('should return string', () => {
        let passphrase = passphraseGeneratorHR.getUltimatePassphrase();
        expect(passphrase).to.be.a('string');
    });
    it('should return right amount of words', () => {
        const numberOfWords = 5; 
        let passphrase = passphraseGeneratorHR.getUltimatePassphrase(numberOfWords);
        let wordArray = passphrase.split(' ');
        expect(wordArray.length).to.equal(numberOfWords);
    });
    it('should return passphrase consisting of words (9+ letters per word)', () => {
        let passphrase = passphraseGeneratorHR.getUltimatePassphrase();
        let wordArray = passphrase.split(' ');
        let index = wordArray.findIndex(word => {
            return word.length < 9
        })
        expect(index).to.equal(-1);
    });
});

describe('Function generatePassphrase(numberOfWords, useDashes, wordArrays)', () => {
    it('should return string', () => {
        let numberOfWords = 1;
        let wordArrays = [['word'], ['word']]
        let passphrase = passphraseGeneratorHR.generatePassphrase(numberOfWords, wordArrays);
        expect(passphrase).to.be.a('string');
    });
    it('should return right amount of words', () => {
        let numberOfWords = 1;
        let wordArrays = [['word'], ['word']]
        let passphrase = passphraseGeneratorHR.generatePassphrase(numberOfWords, wordArrays);
        let wordArray = passphrase.split(' ');
        expect(wordArray.length).to.equal(numberOfWords);
    });
    it('should return right result', () => {
        let numberOfWords = 1;
        let wordArrays = [['word']]
        let passphrase = passphraseGeneratorHR.generatePassphrase(numberOfWords, wordArrays);
        expect(passphrase).to.equal(wordArrays[0][0]);
    });
});
