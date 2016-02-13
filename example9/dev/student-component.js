var React = require('react');

var StudentComponent = React.createClass({
    render: function() {
        return (
            <div>
                <StudentComponent.Name first="Sandeep" last="Patel"/>
                <StudentComponent.Subject course="Mathematics"/>
            </div>
        );
    }
});
StudentComponent.Name = React.createClass({
    render: function() {
        return (
            <h1>{this.props.first+" "+this.props.last }</h1>
        );
    }
});
StudentComponent.Subject = React.createClass({
    render: function() {
        return (
            <h2>{this.props.course}</h2>
        );
    }
});

module.exports = StudentComponent;