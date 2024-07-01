import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login copy';

import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="/" exact component={ Login } />
          <Route path="/copy" exact component={ Login } />
          <Route path="/home" component={ Home } />
          <Route path="" component={ NotFound } />
          <p>TrybeTunes</p>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
