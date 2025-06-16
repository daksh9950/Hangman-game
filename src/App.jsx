import { Routes,Route } from "react-router-dom"
import Button from "./Components/Button/Button"
import Textinput from "./Components/textinput/textinput"
import Textinputform from "./Components/Textinputform/Textinputform"
import Textinputformcantainer from "./Components/Textinputform/Textinputformconatainer"
import { useState } from "react"
import StartGame from "./pages/StartGame"
import PlayGame from "./pages/Playgame"
import { DiVim } from "react-icons/di"



function App (){
  return(
    <Routes>
          <Route path="/start" element={<StartGame/>} />
          <Route path="/play" element={<PlayGame/>} />
          <Route path="/" element={<div>HOME</div>}/>
           

    </Routes>
  )
}



export default App