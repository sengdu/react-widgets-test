 import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
const items = [
	{ title : 'what is react?',
	content: 'we can said react is front-end design api...something like that'
	 },
	{
		title: 'what is ur name ?',
		content : 'my naem is mg mg'
	},
	{
		title: 'what we used react ?',
		content :'is the best '
	}

];
export default () => {
	return (
		<div className="">
			<Accordion items= {items} />
			<Search />
		</div>
	);
}