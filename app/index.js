var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
    render: function () {
        return (
            <div>Hello React Startup!</div>
        )
    }
});

ReactDOM.render(<Hello />, document.getElementById('app'));