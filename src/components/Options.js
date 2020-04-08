import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.optionList.length === 0 && <p>Please add an option to get started</p>}
        {
            props.optionList.map((option) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption = {props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;