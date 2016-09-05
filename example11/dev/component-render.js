import React from 'react';
import ReactDOM from 'react-dom';
import MyTextComponent from './mytext-component';

ReactDOM.render(
	<MyTextComponent color="green"/>,
	document.getElementById("component-container2")
);
ReactDOM.render(
	<MyTextComponent color="blue"/>,
	document.getElementById("component-container1")
);
ReactDOM.render(
	<MyTextComponent />,
	document.getElementById("component-container3")
);