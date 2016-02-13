var React = require('react');
var textColor={
	color:"red"
};

var RedComponent = React.createClass({
	render: function() {
		return <div style={textColor}>Hi: RedComponent</div>;
	}
});

module.exports = RedComponent;