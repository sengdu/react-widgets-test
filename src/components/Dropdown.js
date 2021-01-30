import React from 'react';

const dropdown = ({options,selected,onSelectedChange}) => {
	const renderedOption = options.map ((option) => {
		return (
			<div 
			className="item" 
			key ={option.value}
			onClick ={() => onSelectedChange(option)}
			>
				{option.label}
			</div>
		)
	});
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label >Select a Color</label>
					<div className="ui selection dropdown visible active">
						<i className="dropdown icon"></i>
						<div className="text">Select dropdown{selected.label}</div>
						<div className="menu  visible transition">
							{renderedOption}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default dropdown;