import React, { Component } from 'react'

export default class ComponentState extends Component {
    constructor(props) {
        super(props);
        this.state = {
          quantity: 10,
          show: true,
          max: 5,
          min: 0
        };
      }
    
      IncreaseValue = () => {
          this.setState(prevState => {
            if(prevState.quantity < 20) {
              return {
                quantity: prevState.quantity + 1
              }
            } else {
              return null;
            }
          });
      }
      DecreaseValue = () => {
        this.setState(prevState => {
          if(prevState.quantity > -10) {
            return {
              quantity: prevState.quantity - 1
            }
          } else {
            return null;
          }
        });
      }
      ToggleClick = () => {
        this.setState({
          show: !this.state.show
        });
      }
      handleChange = (event) => {
        this.setState({quantity: event.target.value});
      }
    render(){
        return (
            <>
            <div id="statePageMainBackground">
        <div>
          <center><h1 id="welcome"><em>this</em>.setState</h1></center>
          {/* <center>testing the router from the Component State page</center> */}
        </div>
        <div>
            <center>
                <p id="statePageBorder">
    <button onClick = {this.DecreaseValue} className="stateButtons"> - </button>
      {/* <button onClick={this.IncreaseValue}> + </button> */}
      <input className="statePageCounter" value={this.state.quantity} onChange={this.handleChange}/>
      {/* <button onClick = {this.DecreaseValue}> - </button> */}
      <button onClick = {this.IncreaseValue} className="stateButtons"> + </button>
            </p>
      </center>
      </div>
      <center>
          <span>This area is for the setState explination</span>
      </center>
            <br/><br/><br/>
        </div>
        <footer>
            <br/>
            <center><a href={"/"}><button id="homeButton">return home</button></a></center> 
        </footer>

            </>
        )
    }
}

