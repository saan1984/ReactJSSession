import React from 'react';

class MyButtonComponent extends React.Component {
	sayHello(){
		alert("Hello "+this.props.message)
	}
	render() {
		return <button onClick={this.sayHello}>Click Me</button>;
	}
}

export default MyButtonComponent;