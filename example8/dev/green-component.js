var React = require('react');
var textColor={
	color:"green"
};

var GreenComponent = React.createClass({
	render: function() {
		return <div style={this.textColor}>Hi: GreenComponent</div>;
	}
});

module.exports = GreenComponent;