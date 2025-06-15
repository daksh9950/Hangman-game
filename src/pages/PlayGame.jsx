import { Link } from "react-router-dom";

function PlayGame(){

    return(
          <>
             <h1>PLay Game</h1> 
             <Link to="/start" className="text-blue-500">play game link</Link>
          </>
            )
}

export default PlayGame;