import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import Join from '../components/Join/Join';
import Chat from '../components/Chat/Chat';
import Map from '../components/Map/Map';

const App = () => (
    <Router>
        <Route exact path = "/"  component={Join} />
        <Route path = "/chat" component={Chat} />
        <Route path = "/maps" component={Map} />
    </Router>
);

export default App;