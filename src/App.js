import './App.css';

import React, { Component } from 'react'
import NavBar from './componets/NavBar';
import News from './componets/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
        <div>
      <Router>
            <NavBar />
          <Routes>
            <Route exact path="/" key={"general"} element={<News pageSize={this.pageSize} country='in' category='general' />} />
            <Route exact path="/business" key={"business"} element={<News pageSize={this.pageSize} country='in' category='business' />} />
            <Route exact path="/entertainment" key={"entertainment"} element={<News pageSize={this.pageSize} country='in' category='entertainment' />} />
            <Route exact path="/health"  key={"health"} element={<News pageSize={this.pageSize} country='in' category='health' />} />
            <Route exact path="/science" key={"science"} element={<News pageSize={this.pageSize} country='in' category='science' />} />
            <Route exact path="/sports" key={"sports"} element={<News pageSize={this.pageSize} country='in' category='sports' />} />
            <Route exact path="/technology" key={"technology"} element={<News pageSize={this.pageSize} country='in' category='technology' />} />

          </Routes>
      </Router>
        </div>
    )
  }
}


