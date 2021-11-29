import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

class Redux extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
            age: '',
		};
	}
    
    intro = Swal.fire("Pause", "To better appreciate the magic of Redux you may want to add a dependency to your package.json file. In your terminal, type 'yarn add redux-devtools-extension' or 'npm install redux-devtools-extension' (based on which type on package lock you are using)")
	
    handleSubmit = event => {
		event.preventDefault();
		this.props.name(this.state);
	};

	handleNameChange = event => {
		this.setState({
			name: event.target.value
		});
	};

    handleAgeChange = event => {
		this.setState({
			age: event.target.value
		});
	};


	render() {
		return (
            <>
            <div className="background">
        <div>
          <center><h1 id="welcome">Redux</h1></center>
        </div>
        <center id="reduxPage">
        <span>To open up the console type "control+shift+J". </span><br/>
        <span>If you have added the redux-devtools dependency You will be able to see how Redux stores component state. </span>
        <br/><span>Locate the Redux tag then, select the State tab. Now, fill out the form and watch.</span><br/><br/>
        </center>
        <center>
            {/* @CSS */}
			<div>
				<form id="form" onSubmit={this.handleSubmit}> 
					<label>Enter your Name</label>
					<input id="formFieldsName"
						type="text"
						onChange={this.handleNameChange}
						value={this.state.name}
					/>
                    <label>Enter your Age</label>
                    <input className="formFields"
						type="text"
						onChange={this.handleAgeChange}
						value={this.state.age}
					/>
					<input type="submit" />
				</form>
			</div>
            </center>
            <footer>
				<br/>
                <center><a href={"/"}><button id="homeButton">return home</button></a></center>                 
            </footer>
            </div>
            </>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	name: formData => dispatch({ type: 'SET_NAME', payload: formData })
});

export default connect(null,mapDispatchToProps)(Redux);