import React from 'react';
import ReactDOM from 'react-dom';
import MyTextComponent from './mytext-component';

ReactDOM.render(
	<MyTextComponent message="Developers"/>,
	document.getElementById("component-container")
);