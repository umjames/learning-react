import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return <h1>Hello World from Learning ReactJS</h1>;
    }
}

class GreetingsClock extends React.Component {
    render() {
        const today = new Date();
        return <h1>Hey! Have a good { today.getHours() > 4 && today.getHours() < 18 ? 'day' : 'night' }!</h1>;
    }
}

ReactDOM.render(
    <div>
    <HelloWorld />
    <GreetingsClock />
    </div>,
    document.getElementById('root')
);

