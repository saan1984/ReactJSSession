var React = require('react');
var SomeStudent = React.createClass({
    render: function() {
        console.log("PROPS", this.props);
        return <h5>
        {this.props.name} {this.props.lastname} {this.props.age}
        </h5>;
    }
});
var Student = React.createClass({
    render: function() {
        const myprops = {};
        myprops.name = "Ajay";
        myprops.lastname = "F";
        myprops.age = "11";
        return (
            <div className="commentBox">
            <SomeStudent {...myprops}/>
        </div>
        );
    }
});
module.exports = Student;