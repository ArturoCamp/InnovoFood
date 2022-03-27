import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './../App';
import Explore from './../components/languaje/Explore';
import Profile from './../components/languaje/Profile';

const Router = () => {
	return (
		<div className="contenedor">
			<BrowserRouter>
				<Switch>
					<Route path='./../components/languaje/Explore.js' component={Explore} />
					<Route path="./../components/languaje/Profile.js" component={Profile} />
					<Route path="/" component={App} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
 
export default Router;