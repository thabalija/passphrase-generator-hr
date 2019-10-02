import chai from 'chai';

import * as passphraseGeneratorHR from '../src/index';

let expect = chai.expect;

describe('Function getPassphrase(numberOfWords, useDashes)', () => {
  it('should return string', () => {
    const passphrase = passphraseGeneratorHR.getPassphrase();
    expect(passphrase).to.be.a('string');
  });
  it('should return right amount of words', () => {
    const numberOfWords = 5;
    const passphrase = passphraseGeneratorHR.getPassphrase(numberOfWords);
    const wordArray = passphrase.split(' ');
    expect(wordArray.length).to.equal(numberOfWords);
  });
});

describe('Function getSimplePassphrase(numberOfWords, useDashes)', () => {
  it('should return string', () => {
    const passphrase = passphraseGeneratorHR.getSimplePassphrase();
    expect(passphrase).to.be.a('string');
  });
  it('should return right amount of words', () => {
    const numberOfWords = 5;
    const passphrase = passphraseGeneratorHR.getSimplePassphrase(numberOfWords);
    const wordArray = passphrase.split(' ');
    expect(wordArray.length).to.equal(numberOfWords);
  });
  it('should return passphrase consisting of words (3-5 letters per word)', () => {
    const passphrase = passphraseGeneratorHR.getSimplePassphrase();
    const wordArray = passphrase.split(' ');
    const index = wordArray.findIndex(word => {
      return word.length > 5 || word.length < 3;
    });
    expect(index).to.equal(-1);
  });
  it('should return passphrase consisting of words devided by dashes', () => {
    const numberOfWords = 5;
    const useDashes = true;
    const passphrase = passphraseGeneratorHR.getSimplePassphrase(
      numberOfWords,
      useDashes
    );
    const wordArray = passphrase.split('-');
    expect(wordArray.length).to.equal(numberOfWords);
  });
});

describe('Function getStrongPassphrase(numberOfWords, useDashes)', () => {
  it('should return string', () => {
    const passphrase = passphraseGeneratorHR.getStrongPassphrase();
    expect(passphrase).to.be.a('string');
  });
  it('should return right amount of words', () => {
    const numberOfWords = 5;
    const passphrase = passphraseGeneratorHR.getStrongPassphrase(numberOfWords);
    const wordArray = passphrase.split(' ');
    expect(wordArray.length).to.equal(numberOfWords);
  });
  it('should return passphrase consisting of words (6-8 letters per word)', () => {
    const passphrase = passphraseGeneratorHR.getStrongPassphrase();
    const wordArray = passphrase.split(' ');
    const index = wordArray.findIndex(word => {
      return word.length < 6 || word.length > 8;
    });
    expect(index).to.equal(-1);
  });
  it('should return passphrase consisting of words devided by dashes', () => {
    const numberOfWords = 5;
    const useDashes = true;
    const passphrase = passphraseGeneratorHR.getStrongPassphrase(
      numberOfWords,
      useDashes
    );
    const wordArray = passphrase.split('-');
    expect(wordArray.length).to.equal(numberOfWords);
  });
});

describe('Function getUltimatePassphrase(numberOfWords, useDashes)', () => {
  it('should return string', () => {
    const passphrase = passphraseGeneratorHR.getUltimatePassphrase();
    expect(passphrase).to.be.a('string');
  });
  it('should return right amount of words', () => {
    const numberOfWords = 5;
    const passphrase = passphraseGeneratorHR.getUltimatePassphrase(
      numberOfWords
    );
    const wordArray = passphrase.split(' ');
    expect(wordArray.length).to.equal(numberOfWords);
  });
  it('should return passphrase consisting of words (9+ letters per word)', () => {
    const passphrase = passphraseGeneratorHR.getUltimatePassphrase();
    const wordArray = passphrase.split(' ');
    const index = wordArray.findIndex(word => {
      return word.length < 9;
    });
    expect(index).to.equal(-1);
  });
  it('should return passphrase consisting of words devided by dashes', () => {
    const numberOfWords = 5;
    const useDashes = true;
    const passphrase = passphraseGeneratorHR.getUltimatePassphrase(
      numberOfWords,
      useDashes
    );
    const wordArray = passphrase.split('-');
    expect(wordArray.length).to.equal(numberOfWords);
  });
});

describe('Function generatePassphrase(numberOfWords, useDashes, wordArrays)', () => {
  it('should return string', () => {
    const numberOfWords = 1;
    const useDashes = true;
    const wordArrays = [['word'], ['word']];
    const passphrase = passphraseGeneratorHR.generatePassphrase(
      numberOfWords,
      useDashes,
      wordArrays
    );
    expect(passphrase).to.be.a('string');
  });
  it('should return right amount of words', () => {
    const numberOfWords = 1;
    const useDashes = true;
    const wordArrays = [['word'], ['word']];
    const passphrase = passphraseGeneratorHR.generatePassphrase(
      numberOfWords,
      useDashes,
      wordArrays
    );
    const wordArray = passphrase.split(' ');
    expect(wordArray.length).to.equal(numberOfWords);
  });
  it('should return right result', () => {
    const numberOfWords = 1;
    const useDashes = true;
    const wordArrays = [['word']];
    const passphrase = passphraseGeneratorHR.generatePassphrase(
      numberOfWords,
      useDashes,
      wordArrays
    );
    expect(passphrase).to.equal(wordArrays[0][0]);
  });
  it('should return passphrase consisting of words devided by dashes', () => {
    const numberOfWords = 2;
    const useDashes = true;
    const wordArrays = [['word'], ['word']];
    const passphrase = passphraseGeneratorHR.generatePassphrase(
      numberOfWords,
      useDashes,
      wordArrays
    );
    const wordArray = passphrase.split('-');
    expect(wordArray.length).to.equal(numberOfWords);
  });
});
