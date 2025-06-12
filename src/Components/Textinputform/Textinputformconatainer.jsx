import { useState } from "react";
import Textinputform from "./Textinputform";

function textinputformcantainer(){

    const [inputType, setinputType] = useState("password");

     function handleformSumbit(event){
        event.preventDefault();
        console.log("form submitted");

    }

    function handleTextinputchange(event){
        console.log("text input changed");
        console.log(event.target.value);
    }

    function handleshowhideclick(){
        console.log("show/hide button clicked")
        if(inputType === "password"){
            setinputType("text")
        }
        else{
            setinputType("password")
        }
        console.log(inputType)
    }

    return (<Textinputform
                    inputType={inputType}
                    handleformSumbit={handleformSumbit}
                    handleTextinputchange={handleTextinputchange}
                    handleshowhideclick={handleshowhideclick}
            
            />)

}

export default textinputformcantainer;