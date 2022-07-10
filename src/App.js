import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import './App.css';
import Homepage from './pages/Homepage';
import Start from './pages/Start';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Quiz from "./pages/Quiz";
import Top10 from "./pages/Top10";
import Newsletter from "./pages/Newsletter";
import QuoteGenerator from "./pages/QuoteGenerator";


function App () {
    const { isAuth } = useContext ( AuthContext );

    return (
        <>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Start/>
                    </Route>
                    <Route exact path="/signin">
                        <SignIn/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/profile">
                        { isAuth ? <Homepage/> : <Redirect to="/"/> }
                    </Route>
                    <Route path="/top10">
                        { isAuth ? <Top10/> : <Redirect to="/"/> }
                    </Route>
                    <Route exact path="/quiz">
                        { isAuth ? <Quiz/> : <Redirect to="/"/> }
                    </Route>
                    <Route exact path="/quote-generator">
                        { isAuth ? <QuoteGenerator/> : <Redirect to="/"/> }
                    </Route>
                    <Route exact path="/newsletter">
                        { isAuth ? <Newsletter/> : <Redirect to="/"/> }
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
