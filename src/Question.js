import React from "react";
import'./Question.css'

function Question(props){

    return(
    
        <div >
            <h2>{props.name}</h2>
            <div id="test">
                <input type="RADIO"name= {props.name}/>
                <p>  &nbsp; {props.one}&nbsp;&nbsp; &nbsp; &nbsp; </p> 
                <input type="RADIO"name={props.name} />
                <p> &nbsp;{props.two}&nbsp; &nbsp; &nbsp; &nbsp; </p> 
                <input type="RADIO" name={props.name} x/>
                <p> &nbsp; {props.three}&nbsp;&nbsp; &nbsp; &nbsp; </p>
                 
            </div>
            
        </div>
      

    )
}


export default Question;