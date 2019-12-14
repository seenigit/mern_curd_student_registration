import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import CreateStudent from "./components/createStudent";
import EditStudent from "./components/editStudent";
import ListStudent from "./components/listStudent";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
      <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              <Link to="/" className="navbar-brand">Student Registration App</Link>
           </TypoGraphy>
           
          <Nav></Nav>
          </Toolbar>
      </AppBar>

        <Route path="/" exact component={ListStudent} />
        <Route path="/edit/:id" component={EditStudent} />
        <Route path="/create" component={CreateStudent} />
      </div>
    </Router>
  );
}

export default App;