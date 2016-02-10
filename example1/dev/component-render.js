var React = require('react'),
	ReactDOM = require('react-dom'),
	WelcomeComponent = require('./welcome-component');

ReactDOM.render(<WelcomeComponent message="Developers" />,
	document.getElementById("component-container"));