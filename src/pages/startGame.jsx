import { Link } from "react-router-dom";
import Textinputform from "../Components/Textinputform/Textinputform";
import Textinputformcantainer from "../Components/Textinputform/Textinputformconatainer";
function StartGame(){
    return(
        <>

            <h1>Start Game</h1>
            <Textinputformcantainer/>
            <Link to="/play" className="text-blue-500">Play game link</Link>

        </>
    )
}

export default StartGame;