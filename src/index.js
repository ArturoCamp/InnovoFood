import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import {LangProvider} from './context/langContext'

ReactDOM.render(
	<LangProvider>
		<Router />
	</LangProvider>
, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

