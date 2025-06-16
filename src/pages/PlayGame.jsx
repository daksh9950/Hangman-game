import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import Maskedtext from "../Components/Maskedtext/Maskedtext";

function PlayGame(){

   // const [searchparams] = useSearchParams();
   // console.log(searchparams.get("text"));


   // const {text} = useParams();
   const {state} = useLocation();

    return(
          <>
             <h1>PLay Game {state.wordSelected} </h1> 
             <Maskedtext text={state.wordSelected}  gussedLetters={[]} />
             <Link to="/start" className="text-blue-500">Start game link</Link>
          </>
            )
}

export default PlayGame;