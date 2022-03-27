import React from 'react';
import Header from './Header';

import Grid1 from './Gridpizza';
import {FormattedMessage} from 'react-intl';

const Explore = () => {
	return (
		<div>
			<Header />
			<div className="main">
				<h1 className="titulo">
					<FormattedMessage
						id="explore.title"
						defaultMessage="Explorar"
						
					/>
				</h1>
				<h1><FormattedMessage
						id="explore.title"
						defaultMessage="Explorar"
						
					/></h1>
				<Grid1 />
			</div>
		</div>
	);
}
 
export default Explore;