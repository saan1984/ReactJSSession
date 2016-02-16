var React = require('react');
var ReactDOM = require('react-dom');
var Student = require('./student-component');

ReactDOM.render((<div><Student name="Sandeep" subject='Mathematics'/></div>),
    document.getElementById('component-container-1'));

ReactDOM.render((<div><Student name="Smith"/></div>),
    document.getElementById('component-container-2'));