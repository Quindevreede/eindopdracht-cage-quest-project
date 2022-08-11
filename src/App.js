import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Start from './pages/start/Start';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Quiz from "./pages/quiz/Quiz";
import Top10 from "./pages/top10/Top10";
import Newsletter from "./pages/newsletter/Newsletter";
import QuoteGenerator from "./pages/quotegenerator/QuoteGenerator";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App () {
    const { isAuth } = useContext ( AuthContext );

    return (
        <>
            <div className="app">
            <Header />
            <div className="main">
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
                        { isAuth ? <Homepage/> : <Redirect to="/" /> }
                    </Route>
                    <Route path="/top10">
                        { isAuth ? <Top10/> : <Redirect to="/" /> }
                    </Route>
                    <Route exact path="/quiz">
                        { isAuth ? <Quiz/> : <Redirect to="/" /> }
                    </Route>
                    <Route exact path="/quote-generator">
                        { isAuth ? <QuoteGenerator/> : <Redirect to="/" /> }
                    </Route>
                    <Route exact path="/newsletter">
                        { isAuth ? <Newsletter/> : <Redirect to="/" /> }
                    </Route>
                </Switch>
            </div>
            </div>
            <Footer />

            </>
    );
}

export default App;
