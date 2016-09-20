import React from 'react';

class WelcomeComponent extends React.Component {
	render() {
		return <h1>Hello {this.props.message}</h1>;
	}
}

export default WelcomeComponent;