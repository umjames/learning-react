import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({
    render: function() {
        return <h1>Hello World from Learning ReactJS</h1>;
    }
});

var GreetingsClock = React.createClass({
    render: function() {
        var today = new Date();
        return <h1>Hey! Have a good { today.getHours() > 4 && today.getHours() < 18 ? 'day' : 'night' }!</h1>;
    }
});

ReactDOM.render(
    <div>
    <HelloWorld />
    <GreetingsClock />
    </div>,
    document.getElementById('root')
);

