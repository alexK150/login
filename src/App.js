import React from 'react';
import {Provider} from "react-redux";
import {store} from './redux/store';

import {LoginPage} from "./pages/login.page";

import './App.css';

export const App = () => (
    <Provider store={store}>
        <div className="App">
            <LoginPage/>
        </div>
    </Provider>
);
