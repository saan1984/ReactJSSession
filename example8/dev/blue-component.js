var React = require('react');
var textColor={
	color:"blue"
};

var BlueComponent = React.createClass({
	render: function() {
		return <div style={textColor}>Hi: BlueComponent</div>;
	}
});

module.exports = BlueComponent;