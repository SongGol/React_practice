//import React from 'react';
const React = require('react');

const Tries = ({tryInfo}) => {
    //tryInfo.result = 'a'; //wrong
    const [result, setState] = useState(tryInfo.result);
    
    const onClick = () => {
        setResult('a');
    };

    return(
        <li>
            <b>{tryInfo.try}</b> - {tryInfo.result}
            <div onClick={onClick}>{result}</div>
        </li>
    )
};

export default Tries;