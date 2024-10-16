// Étape 3 (bonus):

// Ecrire un test unitaire qui valide que la fonction divise le texte en substrings de
// longueur maximale.

const splitInChunks = require('./index');

test('splitInChunks', () => {
    const resultant = splitInChunks('Mettez en œuvre une fonction qui prend un text en tant que paramètre de type', 10);

    for (const chunk of resultant) {
        expect(chunk.length).toBeLessThanOrEqual(10);
    }
});