import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../Context/WordContext.js";

function Home(){

    
    const {setwordList,setWord} =  useContext(WordContext);

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);

        setwordList([...data]);

        const randomIndex = Math.floor(Math.random() * data.length);
         
        setWord(data[randomIndex].wordValue);
    }


    useEffect(() => {
        fetchWords();

    })
    return (
    <>
        <Link to='/play' >
             <Button text="single player"  />
            
        </Link>
        <br />
        <Link to="/start" >
          
             <div className="mt-4"  >
                 <Button text= "mutli player" />
             </div>
        </Link>


    </>
    )
}

export default Home;