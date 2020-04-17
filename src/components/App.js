import React from 'react';
import css from './App.module.css';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ContextStoreProvider from 'contexts/StoreContexts'


function App() {
  return (
    <Router>
      <ContextStoreProvider>
        <div className={css.container}>
          <Header />
          <main className={css.contents}>
            <Switch>

            </Switch>
          </main>
          <Navbar />
        </div>
      </ContextStoreProvider>
    </Router>
  );
}

export default App;
