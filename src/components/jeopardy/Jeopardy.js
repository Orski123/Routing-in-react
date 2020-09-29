import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
          category :""
      },
      score: 0
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() 
  
  {
        
    let score
    function getData(){
      if (this.answer=== this.state.data.answer) {
          score = this.state.score+ this.state.data.value
      }
    }
    return (
      <div>
          <strong>User Score: </strong> {this.state.score} <br/>
          <strong>Question: </strong> {this.state.data.question} <br/>
          <strong> Answer : </strong> <input
                        type="text"
                        name="answer"
                        value= {this.answer}
                        onChange={this.handleChange}
                    /> 
                    <button onClick= "answerbutton" > submit </button> {getData}<br/>
          <strong>Category: </strong> {this.state.data.category.title} <br/>
          <strong>Value: </strong> {this.state.data.value} <br/>
          
        {/* {JSON.stringify(this.state.data)} */}
      </div>
    );
  }
}
export default Jeopardy;