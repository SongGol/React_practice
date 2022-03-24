//import React from 'react';
const React = require('react');

const Tries = ({tryInfo}) => {
    return(
        <li>
            <b>{tryInfo.try}</b> - {tryInfo.result}
        </li>
    )
};

export default Tries;