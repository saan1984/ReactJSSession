import React from 'react';

class MyButtonComponent extends React.Component {

	sayHello(){
		console.log("Hello "+ this.props.message);
		alert("Hello "+ this.props.message)
	}
	render() {
		console.log(this.props)
		return <button onClick={this.sayHello.bind(this)}>Click Me</button>;
	}
}

export default MyButtonComponent;