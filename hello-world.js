var HelloWorld = React.createClass({
    render: function() {
        return <h1>Hello World from Learning ReactJS</h1>;
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);

