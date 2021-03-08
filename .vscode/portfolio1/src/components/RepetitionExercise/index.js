import React from "react"



export default class RepetitionExercise extends React.Component {
   constructor(props) {
      super(props)
      this.state = { value: this.props.value }

   }
   addOne() {
      this.setState((prevState) => ({
         value: prevState.value + 1
      }))
   }
   reset() {
      this.setState ({
         value: 0
      })
   }
   render() {

      return (
         <>
            <h1 className="title">{this.props.name}</h1>

            <p className="info">Rep {this.state.value}</p>
            <button className="buttonbutton" onClick={() => this.addOne()}>Complete Rep</button>
            <button className="buttonbutton" onClick={() => this.reset()}>Reset</button>
         </>
      )
   }
}