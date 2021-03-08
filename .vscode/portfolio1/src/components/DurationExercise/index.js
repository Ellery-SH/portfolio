import React from "react";
import Stopwatch from "../Stopwatch" 
 
export default class DurationExercise extends React.Component {
   render() {
      return <>
         <h1 className="title">{this.props.name}</h1>
        
        <Stopwatch></Stopwatch>
   

      
       </>
   }
}