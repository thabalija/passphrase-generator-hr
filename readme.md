# passphrase-generator-hr

[![Build Status](https://travis-ci.org/thabalija/passphrase-generator-hr.svg?branch=master)](https://travis-ci.org/thabalija/passphrase-generator-hr) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/thabalija/passphrase-generator-hr/blob/master/LICENCE)

Passphrase generator with croatian dictionary (scraped words from web).

## Usage

### Install via NPM

Library is available for download via npm

```
npm install passphrase-generator-hr
```

Import functions you need from module

```javascript
import { getPassphrase, getUltimatePassPhrase } from 'passphrase-generator-hr';
```

Generate a passphrase from random length words 
```javascript
getPassPhrase() // --> 'banana vuk mahovina prezime'
```

Generate a passphrase from 3-5 letter words  
```javascript
getSimplePassPhrase() // --> 'oko palac crta zrak'
```

Generate a passphrase from 6-8 letter words  
```javascript
getStrongPassPhrase() // --> 'arkada zahvat mlijeko roditelj'
```

Generate a passphrase from 8+ letter words
```javascript
getUltimatePassPhrase() // -->  'federalni narukvica krijesnica organizacija'
```

All functions take two *optional* arguments - number of words in passphrase and use dashes with default values ```4``` and ```false```.
```javascript
getSimplePassPhrase(3, true) // --> 'oko-palac-crta'
```

### Download uglified script only and include it in your project 

Download ```passphraseGeneratorHR.js``` from dist folder and include it in your html:
```html
<script src="./path/to/script/passphraseGeneratorHR.js" type="text/javascript"></script>
```

and use it in your script:
```javascript
passphraseGeneratorHR.getPassphrase(); // --> 'banana vuk mahovina prezime'
```

### Disclamer

Words are scraped from web so if you find any of the words you think shouldn't be in library please let me know.