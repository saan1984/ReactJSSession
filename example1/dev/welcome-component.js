var React = require('react');
var WelcomeComponent = React.createClass({
	render: function() {
		return <h1>Hello {this.props.message}</h1>;
	}
});
module.exports = WelcomeComponent;