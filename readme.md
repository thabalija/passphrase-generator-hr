# passphrase-generator-hr

Passphrase generator with croatian dictionary (scraped words from web).

## Usage

### Install via NPM

Library is available for download via npm

    npm install passphrase-generator-hr

Import functions you need from module

    import { getPassphrase, getSimplePassPhrase, getStrongPassPhrase, getUltimatePassPhrase } from 'passphrase-generator-hr';

Generate a passphrase from random length words 

    getPassPhrase(4) // --> 'banana vuk mahovina prezime'

Generate a passphrase from 3-5 letter words  

    getSimplePassPhrase(4) // --> 'oko palac crta zrak'

Generate a passphrase from 6-8 letter words  

    getStrongPassPhrase(4) // --> 'arkada zahvat mlijeko roditelj'

Generate a passphrase from 8+ letter words

    getUltimatePassPhrase(4) // -->  'federalni narukvica krijesnica organizacija'


All functions take one optional argument - number of words in passphrase. Default value od words in passphrase is 4.



### Download uglified script only and include it in your project 

Download ```passphraseGeneratorHR.js``` from dist folder and include it in your html:

    <script src="./path-to-script/passphraseGeneratorHR.js" type="text/javascript"></script>

and use it in your script:
    
    passphraseGeneratorHR.getPassphrase(4);
