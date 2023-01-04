import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import "./styles.css";

import { Routes, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>
        </ul>
        <div className="main-route-place">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />{" "}
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
