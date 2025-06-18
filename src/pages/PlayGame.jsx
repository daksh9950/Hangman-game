import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import Maskedtext from "../Components/Maskedtext/Maskedtext";
import LetterButttons from "../Components/LetterButtons/LetterButton";
import { useContext, useState } from "react";
import Hangman from "../Components/Hangman/Hangman";
import { WordContext } from "../Context/WordContext.js";

function PlayGame(){

   // const [searchparams] = useSearchParams();
   // console.log(searchparams.get("text"));


   // const {text} = useParams();
   // const {state} = useLocation();
   const {word} = useContext(WordContext);

   const [gussedLetters, setGussedLeters] = useState([]);
   const [step, setstep] =useState(0);

   function handleletterClick(letter){
      if(word.toUpperCase().includes(letter)){
         console.log("correct");
      }
      else{
         console.log("wrong");
         setstep(step + 1);
      }

      setGussedLeters([...gussedLetters, letter])

   }

    return(
          <>
             <h1>PLay Game  </h1> 
             {/* {wordList.map(wordObject => <li key={wordObject.id} >{wordObject.wordValue}</li>)} */}
             {word && ( 

               <>
               <Maskedtext text={word}  gussedLetters={gussedLetters} />
             <div>
                <LetterButttons text={word} gussedLetters={gussedLetters} onletterClick=  {handleletterClick}/>

             </div>
             <div>
               <Hangman step={step} />
             </div>
               
               
               </>


             )}
             <Link to='/' >Home</Link>
             
             <Link to="/start" className="text-blue-500">Start game link</Link>
          </>
            )
}

export default PlayGame;