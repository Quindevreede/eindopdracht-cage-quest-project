import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Start from './pages/Start';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthContext } from './context/AuthContext';
import './App.css';

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
      <>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/profile">
              {isAuth ? <Homepage /> : <Redirect to="/" />}
              <Homepage />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </>
  );
}

export default App;
