import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import EditWebsite from "./components/edit-website.component";
import AddWebsite from "./components/add-website.component";
import WebsiteList from "./components/website-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={WebsiteList} />
        <Route path="/edit:id" exact component={EditWebsite} />
        <Route path="/add" exact component={AddWebsite} />
      </div>
    </Router>
  );
}

export default App;
