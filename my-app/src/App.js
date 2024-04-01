import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div>
      <Header title='LF'/>
      <Body/>
      <Footer />
    </div>
    </Router>

  );
};

export default App;