import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "@Store/index";
import {PersistGate} from 'redux-persist/integration/react';
import LayoutScreen from "@Screens/LayoutScreen";

function App() {

    const {persistor, store} = configureStore();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <LayoutScreen/>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
