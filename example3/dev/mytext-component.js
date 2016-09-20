import React from 'react';

class MyTextComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			color: "green"
		};
	}

	render() {
		return (
			<div>
				<h1 style={this.state}>Hello, I am {this.state.color}</h1>
				<button onClick={this.changeColor.bind(this)}>Change Color</button>
			</div>
		)
	}

	changeColor(){
		this.setState({color: "red"});
	}
}

export default MyTextComponent;