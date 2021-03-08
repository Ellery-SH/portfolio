import React from "react"


export default class WorkoutData extends React.Component {
        sum(){
        var data1 = parseInt(document.getElementById("in1").value);
        var data2 = parseInt(document.getElementById("in2").value);
         var data3 = parseInt(document.getElementById("in3").value);
        var total = data1 + data2 +data3;

        if (isNaN(total)){
            if(isNaN(data1) && Number.isInteger(data2)){console.log("First Empty"); total = data2;}
            if(isNaN(data2) && Number.isInteger(data1)){console.log("Second Empty"); total = data1;}
            if(isNaN(data3) && Number.isInteger(data1)){console.log("Third Empty"); total = data1;}
            if(isNaN(data1) && isNaN(data2)&& isNaN(data3)){console.log("Both Empty"); total = 0;}
            console.log(" ");
        }

        document.getElementById("in4").innerHTML = total;
    }
       
   render() {

      return (
      <>
         <h1 className="title">Workout Data</h1>

         <div className="app-cont">
             <p>Enter the amount of reps you completed for each excersise</p>


                    <div className="data-cont">

                        <div className="indata">
                            <label>Push Ups</label>
                            <input type="text" name="perc" id="in1" className="in1" />
                        </div><br/>


                        <div className="indata">
                            <label>Jumpping Jacks</label>
                            <input type="text" name="perc" id="in2" className="in1" />
                        </div><br/>

                         <div className="indata">
                            <label>SitUps</label>
                            <input type="text" name="perc" id="in3" className="in1" />
                        </div><br/>


                        <input className="button1" type="submit" onClick={() => this.sum()} value="Total Reps"></input><br/><br/>


                        <div className="indata">
                            <label></label>
                            <div id="in4" className="answ1"></div>
                        </div><br/>

                    </div>
                    </div>

      
       </>
       )
   }
}