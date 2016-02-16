var React = require('react');

var Student = React.createClass({
    render: function() {
        var opts = {};
        return <h5 {...opts}>
            {this.props.name} {this.props.subject}
        </h5>;
    }
});

module.exports = Student;