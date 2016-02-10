import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeComponent from './welcome-component';

ReactDOM.render(
	<WelcomeComponent message="Developers"/>,
	document.getElementById("component-container")
);