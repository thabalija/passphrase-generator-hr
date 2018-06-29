declare namespace passphraseGeneratorHR {
    export function getPassphrase(numberOfWords?: number): string;
    export function getSimplePassphrase(numberOfWords?: number): string;
    export function getStrongPassphrase(numberOfWords?: number): string;
    export function getUltimatePassphrase(numberOfWords?: number): string;
    export function generatePassphrase(numberOfWords?: number): string;
}

export = passphraseGeneratorHR;