import React, { Component } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';
import Join from '../components/Join/Join';
import Chat from '../components/Chat/Chat';
import Map from '../components/Map/Map';
import Youtube from '../components/Youtube/Youtube';


const App = () => {
    return (
        <Router>
            <div className="flex-container">
                <div className="flex-item item-1">
                    <div className="item-11">
                        <Route path="/join" component={Join} />
                    </div>
                    <div className="flex-item item-12">
                        <div><h1>Projects</h1></div>
                        <div>
                            <div>
                                <Link to={'/join'}>
                                    <button type="submit"  >Chatting</button>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/youtube'} >
                                    <button type="submit"  >Youtube</button>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/maps'}>
                                    <button type="submit"  >GoogleMaps</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-item item-2">
                    <Route path="/chat" component={Chat} />
                    <Route path="/youtube" component={Youtube} />
                    <Route path="/maps" component={Map} />
                </div>
            </div>
        </Router>
    )
}

export default App;