import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import App from './Components/App';
import todosReducer from "./Reducers/reducer.js";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(todosReducer);

const Index = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <Route render={(props) => 
                <App pathname={props.location.pathname} />
            }>
            </Route>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));
