const React = require('react');
const ReactDOM = require('react-dom');

//const ReactionRate = require('./ReactionRate');
import ReactionRate from './ReactionRate';
import ReactionRateHooks from './ReactionRateHooks';

ReactDOM.render(<ReactionRateHooks />, document.querySelector("#root"));