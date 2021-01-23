import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoriaList from './components/CategoriaList';
import CategoriaEdit from './components/CategoriaEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/categorias' exact={true} component={CategoriaList}/>
          <Route path='/categorias/:id' component={CategoriaEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;