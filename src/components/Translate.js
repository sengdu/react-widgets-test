import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
	{
		label: 'Myanmar',
		value: 'my'
	},
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text ,setText] = useState ('');

  return (
    <div>
		<div className="ui form">
			<div className="field">
				<label htmlFor="">Enter text</label>
				<input  type="text" value={text} onChange= {(e) => setText(e.target.value)}/>
			</div>
		</div>
      <Dropdown
	    label ="set a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;