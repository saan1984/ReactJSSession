import React from 'react';

class WelcomeComponent extends React.Component {
	render() {
		return <h1>Welcome  {this.props.message}!</h1>;
	}
}

export default WelcomeComponent;