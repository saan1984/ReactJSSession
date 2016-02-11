import React from 'react';
let messageStyle={
		color:"red",
		border:"1px solid grey",
		boxShadow:"2px 2px 2px lightGrey",
		padding: "20px",
		width: "200px"
	};

class ColorComponent extends React.Component {
	render() {
		return (
			<div style={messageStyle}>
				Good Morning Developers
			</div>
		);
	}
}

export default ColorComponent;