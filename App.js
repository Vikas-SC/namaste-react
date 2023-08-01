const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
 [
    React.createElement('h1', {}, 'div 1'),
    React.createElement('h1', {}, [
        React.createElement('div', {}, [
            React.createElement('h2', {}, 'hello')
        ])
    ]),
 ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
