import React from 'react';
// Import Redux Store
import { Provider } from "react-redux";
import store from '../../store';
// Import Sass
import "../../styles/index.scss";
// Import Components
import Navigation from "../Navigation";

// Fontawesome 5
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faMapSigns, faAt } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons'; //Example for brand icons
library.add(faMapSigns, faPhoneAlt, faAt, faReact);

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Navigation />
                {/* <Home /> */}
            </div>
        </Provider>
    );
};
export default App;