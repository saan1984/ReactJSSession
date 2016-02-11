var React = require('react');
var ReactDOM = require('react-dom');
var ColorTextComponent = require('./color-component-es5-jsx').ColorTextComponent;
var ColorNameComponent = require('./color-component-es5-jsx').ColorNameComponent;

ReactDOM.render(<ColorTextComponent />, document.getElementById("component-container-1"));
ReactDOM.render(<ColorNameComponent />, document.getElementById("component-container-2"));