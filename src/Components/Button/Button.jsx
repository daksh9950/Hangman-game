import getButtonhandker from "./getButtonhandker";

function Button({text,onClickhandler, styleType ="primary", type="button" }){

    console.log(text);
  return (
    <button 
         onClick = {onClickhandler}
         type={type}
         className={`px-4 py-2 ${getButtonhandker(styleType)} text-white`}
         >
        {text}
    </button>
  )
}

export default Button;