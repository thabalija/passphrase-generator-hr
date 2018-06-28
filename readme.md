# passphrase-generator-hr

Passphrase generator with croatian words.

## Installation

Library is available for download via npm

    npm install passphrase-generator-hr

## Usage

Import everything from lib

    import * as passGenHR from '../src/index';

Generate a passphrase from random length words 

    passGenHR.getPassPhrase(4) // --> 'banana vuk mahovina prezime'

Generate a passphrase from 3-5 letter words  

    passGenHR.getSimplePassPhrase(4) // --> 'oko palac crta zrak'

Generate a passphrase from 6-8 letter words  

    passGenHR.getStrongPassPhrase(4) // --> 'arkada zahvat mlijeko roditelj'

Generate a passphrase from 8+ letter words

    passGenHR.getUltimatePassPhrase(4) // -->  'federalni narukvica krijesnica organizacija'


All functions take one optional argument - number of words in passphrase. Default value od words in passphrase is 4.