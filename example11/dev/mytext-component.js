import React from 'react';

class MyTextComponent extends React.Component {
	constructor() {
		super();
	}
	render() {
		return <h1 style={{color:this.props.color}}>Hello I am text</h1>;
	}
}
MyTextComponent.propTypes = { color: React.PropTypes.oneOf(['red','green']) };
MyTextComponent.defaultProps = { color: 'red' };
export default MyTextComponent;