import { useState } from "react";
import Textinputform from "./Textinputform";
import { useNavigate } from "react-router-dom";

function Textinputformcantainer(){

    const [inputType, setinputType] = useState("password");
    const [value, setValue] = useState(" ");

    const navigate = useNavigate();

    function handleformSumbit(event){
        event.preventDefault();
        console.log("form submitted",value);
        if(value){
            setTimeout(()=>{
                navigate("/play")
            }, 5000)
        }

    }

    function handleTextinputchange(event){
        console.log("text input changed");
        console.log(event.target.value);
        setValue(event.target.value)
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

export default Textinputformcantainer;