import React, { Fragment, useEffect } from 'react';
// import AddRefill from './components/add_refill';
import Router from './Router';
// import Register from './components/register'
// import LoggedIn from './components/LoggedIn';
// Redux
import Alert from './components/layout/alert';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}


function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
    <div className="App">
      <Router />
    </div>
    </Provider>

  );
} 

export default App;
