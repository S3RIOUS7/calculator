import React, { useState } from "react";
import "/Projects/reactProjects/calculator/src/components/main/main.scss"



const numbersSign = [{id:0, text:0}, {id:1, text:1}, {id:2, text:2}, {id:3, text:3}, {id:4, text:4}, {id:5, text:5}, {id:6, text:6}, {id:7, text:7}, {id:8, text:8}, {id:9, text:9}, , {id:10, text:"+"}, {id:11, text:"-"}, {id:12, text:"*"}, {id:13, text:"/"}, {id:14, text:"="}, {id:15, text:"C"}]

function Main (){
    const [displayText, setDisplayText] = useState("");
    const [saveText, setSaveText] = useState("");
    const [result, setResult] = useState("");

    const ouputNumbers = (text, id) => {
        if(id >= 0 && id <= 9){
        setDisplayText(prevText => prevText + text);}
        else if(id === 15){
            setDisplayText('')
            setSaveText('')
        }
        else if(id >= 10 && id <= 13){
            setSaveText(displayText);
            setDisplayText('')
        }
        else if(id === 14){
            setResult()
        }
          
    };
//asd
    return(
    <div>
       
    <div className="allButtons">{numbersSign.map(content => (<div key = {content.id} ><button className="btn" onClick={() => ouputNumbers(content.text, content.id)} >{content.text}</button></div>))}</div>

    <div>{displayText}</div>
    <div>{saveText}</div>

    
    </div>
)
}

    
export default Main;