#ReactJS Overview Session
This is a overview session for ReactJS library.
It covers some of the important features of ReactJS libray.
The overview contains the following features:-

##Introduction
- interactive, stateful & reusable UI component development.
- work on both client and server side application development.
- virtual DOM is the core of the ReactJS library.
- write ReactJS component using 2 approaches:-
    - JSX.
    - ES6 or ECMAScript 2015.
    
##Configure Development Environment
- Install Node Package manager.
- Install Gulp build tool.
- Create  `package.json` file using `npm init` command.
- Install ReactJS as local dependency using `npm install react --save` command in terminal.
- Install following NPM dev packages:-
     | NPM Dev Package     | Description                                                                                         | Installation Command                       |
     |---------------------|-----------------------------------------------------------------------------------------------------|--------------------------------------------|
     | Gulp                | BUILD: tool to automate development task.                                                           | npm install gulp --save-dev                |
     | Browserify          | BROWSERIFIED: Facilitate require('modules') in the browser by bundling up all of your dependencies. | npm install browserify --save-dev          |
     | Babelfy             | BABELIFIED: browserify the the babel code.                                                          | npm install babelify --save-dev            |
     | babel-preset-es2015 | Babel preset for all es2015 plugins.                                                                | npm install babel-preset-es2015 --save-dev |
     | babel-preset-react  | Babel preset for all React plugins.                                                                 | npm install babel-preset-react --save-dev  |
     | vinyl-source-stream | Better Stream handling For NodeJS that can work with Browserify                                     | npm install vinyl-source-stream --save-dev |
    
- Or we can install it in a single command:-   `npm install --save-dev gulp, browserify, babelify, vinyl-source-stream, babel-preset-es2015, babel-preset-react`.