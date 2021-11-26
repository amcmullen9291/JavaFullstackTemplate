import React, { Component } from 'react'

export default class ComponentState extends Component {
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }

   decrease(){
    this.setState({count : this.state.count -1});
}
 
    render(){
        return (
            <>
        <div>
          <center><h1 id="welcome">This.setState</h1></center>
          <center>testing the router from the Component State page</center>
        </div>
        <div>
            <h2> {this.state.count}</h2> 
            <button onClick={this.decrease}> - </button><button onClick={this.increase}> + </button>
        </div>
        <center><a href={"/"}><button>return home</button></a></center>

            </>
        )
    }
}

