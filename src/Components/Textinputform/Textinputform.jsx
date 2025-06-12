import Textinput from "../textinput/textinput";
import Button from "../Button/Button";

function Textinputform({inputType, handleformSumbit, handleTextinputchange, handleshowhideclick}){

   

    return(
        <form onSubmit={handleformSumbit} >
            <div>
                <Textinput
                    type={inputType}
                     label={"enter a word or a phase"}
                     placeholder="Enter a word or phrase here"
                     onChangeHandler={handleTextinputchange}

                />
            </div>
            <div>
                <Button
                    
                     styleType="warning"
                     text={inputType === "password" ? "show" : "hide" }
                     onClickhandler={handleshowhideclick}
                />

            </div>
            <div>
                <Button 
                    type="sumbit"
                    styleType= "primary"
                    text= "submit"
                
                />
            </div>

        </form>
 


    )
}
export default Textinputform;