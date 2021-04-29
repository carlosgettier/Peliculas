import React from 'react'
import './App.css';
import List from './containers/list';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Pelicula from './components/peliculas';
function App() {
  return (
    <Router>
      <div className="lista">
      <Link to="/" className="inicio">
       Pelis
      </Link>
      </div>
     
      <Switch>
        <Route path="/pelicula/:id">
          <Pelicula/>
        </Route>
        <Route path="/">
          <div className="lista">
            <List />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
