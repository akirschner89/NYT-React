// import React from 'react';
import ReactDOM from 'react-dom';

// import App from '.components/App';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes';

ReactDOM.render(routes, document.getElementById("root"));
registerServiceWorker();
