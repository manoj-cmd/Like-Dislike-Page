import React from 'react';
import Home from './Home'; 
import Like from './Like';
import Dislike from './Dislike';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
  	<Router>
    <div className="App">
	<Switch>
	<Route path="/" exact component={Home} />
	<Route path="/Like" component={Like} />
	<Route path="/Dislike" component={Dislike} />
	</Switch>
	
    </div>
	</Router>
  );
}


export default App;
