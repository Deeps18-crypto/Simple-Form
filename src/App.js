import Form from "./Form/Form";
import React from "react";
import Tabel from "./Tabel/Tabel";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Header />
          <Route path="/table">
            <Tabel />
          </Route>
          <Route exact path="/">
            <Form />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
