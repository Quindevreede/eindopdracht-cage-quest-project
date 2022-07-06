import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Start from './pages/Start';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthContext } from './context/AuthContext';
import './App.css';
import Footer from "./components/Footer";
import Quiz from "./pages/Quiz";
import Top25 from "./pages/Top25";
import Newsletter from "./pages/Newsletter";

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
      <>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route path="/profile">
              {isAuth ? <Homepage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/quiz">
              <Quiz />
            </Route>
            <Route exact path="/newsletter">
              <Newsletter />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
        <Footer company="the Cage Company" year="2022"/>
      </>
  );
}

export default App;
