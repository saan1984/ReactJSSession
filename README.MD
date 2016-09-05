#ReactJS Overview Session
This is a overview session for ReactJS library.
It covers some of the important features of ReactJS library.
The overview contains the following features:-
- React setup
- property
- state
- events
- React inline style
- lifecycle
- mixin

## Section Description

| No 	|  Section  	| Description                                  	|
|:--:	|:---------:	|----------------------------------------------	|
|  1 	|  Example1 	| JSX with ES5 conventional javascript flavour 	|
|  2 	|  Example2 	| JSX with ES6/ECMAScript2015 flavour          	|
|  3 	|  Example3 	| State of a React component                   	|
|  4 	|  Example4 	| Event handling                               	|
|  5 	|  Example5 	| React component lifecycle                    	|
|  6 	|  Example6 	| React CSS style                              	|
|  7 	|  Example7 	| React mixin                                  	|
|  8 	|  Example8 	| React Component composition                  	|
|  9 	|  Example9 	| React NameSpace Component                    	|
| 10 	| Example10 	| React with spread operator                   	|
| 11 	| Example11  |  React Property validation                       |


##Introduction
- interactive, stateful & reusable UI component development.
- work on both client and server side application development.
- virtual DOM is the core of the ReactJS library.
- write ReactJS component using 2 approaches:-
    - JSX with ES5 conventional javascript flavour
    - JSX with ES6/ECMAScript2015 flavour.
    
##JSX
- HTML like syntax which gets transformed to lightweight JavaScript objects.
- Gulp process include this JSX to JS transformation.

##Virtual DOM
- Works on When-Which paradigm. 
- When represent: data change time. 
- Which identifies the DOM elements that need to be updated.
- React's rendered HTML markup contains data-reactid attributes,React track DOM node changes using this attribute.

    
##Configure Development Environment
- Install Node Package manager.
- Install Gulp build tool.
- Create  `package.json` file using `npm init` command.
- Install ReactJS Core library local dependency using `npm install react --save` command in terminal.
- Install ReactJS DOM library as local dependency using `npm install react-dom --save` command in terminal.
- Install following NPM dev packages:--

| NPM Dev Package     | Description                                                                                         | Installation Command                       |
|---------------------|-----------------------------------------------------------------------------------------------------|--------------------------------------------|
| Gulp                | BUILD: tool to automate development task.                                                           | npm install gulp --save-dev                |
| Browserify          | BROWSERIFIED: Facilitate require('modules') in the browser by bundling up all of your dependencies. | npm install browserify --save-dev          |
| Babelfy             | BABELIFIED: browserify the the babel code.                                                          | npm install babelify --save-dev            |
| babel-preset-es2015 | Babel preset for all es2015 plugins.                                                                | npm install babel-preset-es2015 --save-dev |
| babel-preset-react  | Babel preset for all React plugins.                                                                 | npm install babel-preset-react --save-dev  |
| vinyl-source-stream | Better Stream handling For NodeJS that can work with Browserify.                                    | npm install vinyl-source-stream --save-dev |


##React Top Level Objects, Methods & Properties
Top level object in ReactJS are as follows:-
- React : Top level object, similar to Jquery $.
- ReactDOM: DOM specific methods and properties
- ReactDOMServer: Isomorphic methods

###React 
- **React.Component** : Base class for React components
- **React.createClass()** :Creates a React Class with given specification and returns ReactClass.
- **React.createElement()** :Create and return a new ReactElement of the given type.
- **React.cloneElement()** :Return a new ReactElement by copying supplied element.
- **React.createFactory()** :Return a function that produces ReactElements of a given type
- **React.isValidElement()** :checks the object is a ReactElement.
- **React.DOM** : wrappers around React.createElement 
- **React.PropTypes** : defines type of property used in a ReactClass.
- **React.Children**: Parent element can read its children by accessing the special this.props.children prop.

###ReactDOM
- **ReactDOM.render()** : Render a ReactElement into the DOM in the target container.
- **ReactDOM.unmountComponentAtNode()** : Remove a mounted React component from the DOM and clean up its event handlers and state.
- **ReactDOM.findDOMNode()** : returns the targeted browser DOM element. 

###ReactDOMServer
- **ReactDOMServer.renderToString()**: Used for achieveing Isomorphism, this method generates HTML on the server and send the markup down to client.
- **ReactDOMServer.renderToStaticMarkup()**: this doesn't create extra DOM attributes such as data-react-id or elese it is same as renderToString() method.

##Usefull Links:-
- Learn ES2015 using BabelJS: http://babeljs.io/docs/learn-es2015/
- React Examples: https://github.com/egor-smirnov/egorsmirnov.me-examples
- React How to: https://github.com/petehunt/react-howto
- Radium inline styles: http://stack.formidable.com/radium/
- React diff Algorithm: http://calendar.perfplanet.com/2013/diff/