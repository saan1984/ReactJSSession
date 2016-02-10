import React from 'react';

class MyTextComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			color: "red"
		};
	}
	render() {
		return <h1 className={this.state.color}>Hello I am text</h1>;
	}
}

export default MyTextComponent;