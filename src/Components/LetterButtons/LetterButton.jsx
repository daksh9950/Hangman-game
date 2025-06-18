const Alpabets = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
function LetterButttons({text, gussedLetters, onletterClick}){

    const originalLetters = new Set(text.toUpperCase().split(''))

    const gussedLettersSet = new Set(gussedLetters)
    const buttonStyle = function(letter){
        if(gussedLettersSet.has(letter)){
            return `${originalLetters.has(letter) ?  'bg-green-500': 'bg-red-500'}`
        }
        else{
            return 'bg-blue-500'
        }
    }

    function handleletterClick(event){
        const characterofletter = event.target.value
        onletterClick?.(characterofletter)

    }
    
    const buttons = Alpabets.map(letter => {
        return(
            <button
                key = {`button-${letter}`}
                value = {letter}
                onClick={handleletterClick}
                disabled={gussedLettersSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
                  {letter}
            </button>
        )
    })

    return(
        <>

        {buttons}
        </>
    )

}

export default LetterButttons;