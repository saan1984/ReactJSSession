import React from 'react';
import ReactDOM from 'react-dom';
import WeatherComponent from './weather-component';

ReactDOM.render(
	<WeatherComponent message="Developers"/>,
	document.getElementById("component-container")
);