import { useEffect, useState } from "react";
import Textinputform from "./Textinputform";
import { useNavigate } from "react-router-dom";

function Textinputformcantainer(){

    const [inputType, setinputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    function handleformSumbit(event){
        event.preventDefault();
        // const trimmedValue = Value.trim()
        console.log("form submitted",value);
        if(value){
            setTimeout(()=>{

                navigate(`/play`, {state : {wordSelected : value}})
            }, 1000)
        }else{
            alert("Please enter a value before submitting the form.")
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

    // useEffect(()=>{
    //     console.log("component first load");
    // }, []) // passing an dependency array

    // useEffect(()=>{
    //     console.log("component first load and update");
    // })

    // useEffect(()=>{
    //     console.log("component first load and update value changed");
    // },[value])

    // useEffect(()=>{
    //     console.log("component first load and inputtype value changed ");
    // }, [inputType])

    return (<Textinputform
                    inputType={inputType}
                    handleformSumbit={handleformSumbit}
                    handleTextinputchange={handleTextinputchange}
                    handleshowhideclick={handleshowhideclick}
            
            />)
 
}

export default Textinputformcantainer;