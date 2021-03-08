import React from "react"
import DurationExercise from "./components/DurationExercise"
import RepetitionExercise from "./components/RepetitionExercise"
import WorkoutData from "./components/data"

import './App.css'



const MENU = "menu"
const REPETITON_SCREEN = "repetition_screen"
const DURATION_SCREEN = "druation_screen"
const DATA_SCREEN = "data_screen"


//Menu 
class MenuScreen extends React.Component {
   constructor(props){
      super(props)
      this.state = { currentScreen: MENU, selectedItem: undefined}
   }
   render() {//list
      let objects=[
         { objType: "duration", name: "Swimming", value: 0 },
         {objType: "repetiton", name: "Push Ups", value: 0},
         { objType: "duration", name: "Biking", starttime: "00:00:00"},
         { objType: "repetiton", name: "Jumpping Jacks", value: 0 },
         { objType: "duration", name: "Running", starttime: "00:00:00" },
         { objType: "repetiton", name: "Situps", value: 0 },
        
      ]

      let screen 
      switch(this.state.currentScreen){
         case MENU:
            screen= (

               <>
               
               <div class="container">
                  <h2 className="menuheader">Go Do Something</h2>
                  <ul className="unordered-list">
                     {objects.map((obj, index) =>
                           <li key={index} className="list-item">
                              <button className="menubutton"
                              onClick={() => 
                                 this.setState({ 
                                    currentScreen: obj.objType === "repetiton" ?REPETITON_SCREEN : DURATION_SCREEN,
                                   
                                    selectedItem: obj,
                                 })
                                 }
                                 >
                                    {obj.name}
                                    </button>
                           </li>
                     )}
                     </ul>
                     
                     <button className="databutton" onClick={() =>
                     this.setState({currentScreen: DATA_SCREEN
                     }

                     )
                    }
                    >
                      Workout Data
                    </button>
                   
                     </div>
                     
                 
               </>
         //if button is clicked Login is false which means you go to the login page
      )
      break
      case REPETITON_SCREEN:
         screen = 
         (
         <>
          <div class="container">
           
          <RepetitionExercise {...this.state.selectedItem}></RepetitionExercise>
          
          <button className="buttonbutton" onClick={ () => this.setState({currentScreen:MENU})}>Back
          </button>
          </div>
          </>
          )
            break
      case DURATION_SCREEN:
         screen =
         (
            <>
            <div class="container">
              
               <DurationExercise {...this.state.selectedItem}></DurationExercise>
               
               <button className="button2button" onClick={() => this.setState({currentScreen: MENU})}>Back
               </button>
               </div>
             </>
         )
         break
case DATA_SCREEN:
         screen =
         (
            <>
            <div class="container">
              
               <WorkoutData {...this.state.selectedItem}></WorkoutData>
               
               <button className="button2button" onClick={() => this.setState({currentScreen: MENU})}>Back
               </button>
               </div>
             </>
         )
         break

        }
      return screen
         //output
        
   }
}


export default class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = { loggedIn: true }
   }

   //login method
   login = (status) => {
      this.setState({loggedIn:status})
   }
   render() {
      let screen;
      if (this.state.loggedIn){
         screen = (
            <MenuScreen login={this.login}></MenuScreen>
         )
      
      }
      return screen
      //return <MenuScreen></MenuScreen>
   }
}