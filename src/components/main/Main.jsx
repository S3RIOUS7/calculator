import React, { useState } from "react";
//import "/Projects/reactProjects/calculator/src/components/main/main.scss"
import "./main.scss"
import Input from "../input/Input";


const numbersSign = [{id:0, text:0}, {id:1, text:1}, {id:2, text:2}, {id:3, text:3}, {id:4, text:4}, {id:5, text:5}, {id:6, text:6}, {id:7, text:7}, {id:8, text:8}, {id:9, text:9}, , {id:10, text:"."}, {id:11, text:"+"}, {id:12, text:"-"}, {id:13, text:"*"}, {id:14, text:"/"}, {id:15, text:"="}, {id:16, text:"C"}]

function Main (){
    const [displayText, setDisplayText] = useState("");
    const [saveText, setSaveText] = useState("");
    const [calculationResult, setCalculationResult] = useState("");
    


    const getValueInput = (event) => {
      setDisplayText(event.target.value);}

    const ouputNumbers = (text, id) => {


        if(displayText[0] === '0'){
            setDisplayText('')

        }

        if(id >= 0 && id <= 9){
        setDisplayText(prevText => prevText + text);
      }

        else if(id === 16){
            setDisplayText('')
            setSaveText('')
        }
       
        else if (id >= 11 && id <= 14) {
            setSaveText(displayText);
            setDisplayText("");
            const operations = {
              11: "+",
              12: "-",
              13: "*",
              14: "/"
            };
            if (id in operations) {
              setCalculationResult(operations[id]);
            }

          }
          else if (id === 10 ) {
            if (!displayText.includes(".")) {
              setDisplayText(prevText => prevText + text);
            }
          }
        
        else if(id === 15){
            if (saveText !== "" && displayText !== "") {
                const operations = {
                  "+": () => "" + (+saveText + +displayText),
                  "-": () => "" + (+saveText - +displayText),
                  "*": () => "" + (+saveText * +displayText),
                  "/": () => "" + (+saveText / +displayText)
                };
                if (calculationResult in operations) {
                  setDisplayText(operations[calculationResult]());
                  setSaveText("");
                  setCalculationResult("");
                }
              }
        }   
    };
 
    
//asd
    return(
    <div className="container">
       <div className="inputMax"><Input type='text' value={displayText} onChange={(event) => getValueInput(event)} /></div>
      <div className="allButtons">
        {numbersSign.map(content => (<div key = {content.id} ><button className={content.id === 16 ? "btnClear" : content.id <= 10 ? "btn" : "btncount" } onClick={() => ouputNumbers(content.text, content.id)}>{content.text}</button></div>))}
    </div>
      
    

    
    
    </div>
)
}

    
export default Main;