import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
// import App from './App.js';
// import registerServiceWorker from './registerServiceWorker';


// import store from "./store";


// import './components/sectioncreator/SectionCreator.css'
//
// store.subscribe(() => {
//     console.log(store.getState());
// });

ReactDOM.render(
    <BrowserRouter>

            <App />


    </BrowserRouter>
    , document.getElementById('root'));

