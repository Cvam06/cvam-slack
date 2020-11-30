import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat.js";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <Login />
          ) : (
              <div>

                <Header />
                <div className="app__body">
                  <Sidebar />
                  <Switch>
                    <Route path="/room/:roomId">
                      <Chat />
                    </Route>
                    <Route path="/">
                      <h1>Welcome</h1>
                    </Route>
                  </Switch>
                </div>

              </div>
            )
        }
      </Router>
    </div>
  );
}

export default App;
