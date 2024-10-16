// Étape 1:
// Mettez en œuvre une fonction qui prend un text en tant que paramètre de type
// string et un maxLength en tant que paramètre de type integer, et qui renvoie un
// array de strings. Chaque string dans le array ne sera pas plus longue que le
// paramètre maxLength et les mots ne seront pas coupés en deux ou brisés.

const splitInChunks = (text, maxLength) => {
    let resultant = [];
    let currentChunk = '';
    const words = text.split(' ');

    for (const word of words) {
        if (currentChunk.length + word.length + 1 <= maxLength) {
            currentChunk += (currentChunk.length ? ' ' : '') + word;
        } else {
            if (currentChunk) {
                resultant.push(currentChunk);
            }

            currentChunk = word;
        }
    }

    if (currentChunk) {
        resultant.push(currentChunk);
    }

    return resultant;
}

// Étape 2:
// Assurez - vous que la fonction implémentée fonctionne comme prévu et qu'elle est
// conforme aux exigences.

console.log(splitInChunks('Mettez en œuvre une fonction qui prend un text en tant que paramètre de type', 10));

module.exports = splitInChunks;