var React = require('react');

var myColorMixin={
	textColor:{color:"blue"}
};
var ColorTextComponent = React.createClass({
	mixins: [myColorMixin],
	render: function() {
		return <div style={this.textColor}>ColorTextComponent: Mixin example in JSX without ES6</div>;
	}
});

var ColorNameComponent = React.createClass({
	mixins: [myColorMixin],
	render: function() {
		return <div style={this.textColor}>ColorNameComponent:Mixin example in JSX without ES6</div>;
	}
});

module.exports = {
	"ColorTextComponent":ColorTextComponent,
	"ColorNameComponent":ColorNameComponent
};
