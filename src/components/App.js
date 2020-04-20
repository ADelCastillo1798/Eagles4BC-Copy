import React from 'react';
import css from './App.module.css';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Responses from 'components/Responses';
import NewPost from 'components/NewPost';
import Profile from 'components/Profile';
import Post from 'components/Post';
import Home from 'components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ContextStoreProvider from 'contexts/StoreContext'

function App() {
  return (
    <Router>
      <ContextStoreProvider>
        <div className={css.container}>
          <Header />
          <main className={css.contents}>
            <Switch>
              <Route path='/responses'>
                <Responses />
              </Route>
              <Route path='/createNew'>
                <NewPost />
              </Route>
              <Route path='/profile/:userId?'>
                <Profile />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </main>
          <Navbar />
        </div>
      </ContextStoreProvider>
    </Router>
  );
}

export default App;
