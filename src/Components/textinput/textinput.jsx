function Textinput({type = "text", label, placeholder = "enterr your input here",  onChangeHandler}){
    return(
        <label>
            <span className="text-grey-700" >{label}</span>
        
            <input 
            
                  type={type}
                  className="px-4 py-2 border border-grey-400 rounded-md w-full"
                  placeholder={placeholder}
                  
                  onChangeHandler={onChangeHandler}
             />            
        </label>
    )
}
export default Textinput;