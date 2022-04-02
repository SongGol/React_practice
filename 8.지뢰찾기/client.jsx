const React = require('react');
const ReactDOMClient = require('react-dom/client');

import MineSearch from './MineSearch';

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<MineSearch />);