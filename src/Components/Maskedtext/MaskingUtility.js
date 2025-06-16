/**
 * 
 * @parms {the word which is givn as input and expected to be guessed } originalWord
 * @parms{letters which are guessed by the user already}guesslettters
 */

export function getMaskedString(originalWord,guessedLetters ){
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());

    const guessedLettersSet = new  Set(guessedLetters);

    const result = originalWord.toUpperCase().split('').map(char =>{
        if(guessedLettersSet.has(char)){
            return char; 
        }
        else{
            return "_";
        }
    })// ["H", "_", "M", "_", "_", "E"]

    return result;// "H _ M _ _ E"
}