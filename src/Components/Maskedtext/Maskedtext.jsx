import { getMaskedString } from "./MaskingUtility";

function Maskedtext({text, gussedLetters}){

    const MaskedString = getMaskedString(text, gussedLetters)

    return (
        <>
              {MaskedString.map((letter, index)=>{
                return(
                    <span key={index} className="mx-1 my-2">
                        {letter}
                    </span>
                )
              })}
        
        </>
    )

}

export default Maskedtext;  