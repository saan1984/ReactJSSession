var React = require('react');
var RedComponent = require('./red-component');
var GreenComponent = require('./green-component');
var BlueComponent = require('./blue-component');

var RGBTextComponent = React.createClass({
	render: function() {
		return (<form>
					<legend>Hi I am RGBComponent</legend>
					<fieldset>
						<RedComponent/>
						<GreenComponent/>
						<BlueComponent/>
					</fieldset>
		      	</form>);
	}
});
module.exports = RGBTextComponent;