import React,{createContext,useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import isTokenValid from '../helpers/isTokenValid';

export const AuthContext = createContext ({});

function AuthContextProvider ( {children} ) {
    const [isAuth,toggleIsAuth] = useState ({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory ();

    useEffect (() => {
        const token = localStorage.getItem ('token');

        if (token && isTokenValid (token)) {
            const decoded = jwt_decode (token);
            fetchUserData (decoded.sub,token);
        } else {
            localStorage.clear ();
            toggleIsAuth ({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    },[]);


    function login ( JWT ) {
        localStorage.setItem ('token',JWT);
        const decoded = jwt_decode (JWT);

        fetchUserData (decoded.sub,JWT,'/homepage');
    }

    function logout () {
        localStorage.clear ();
        toggleIsAuth ({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log ('USER LOGGED OUT');
        history.push ('/');
    }

    async function fetchUserData ( id,token,redirectUrl ) {
        try {
            const result = await axios.get ( `https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers : {
                    "Content-Type" : "application/json",
                    Authorization : `Bearer ${ token }`,
                },
            });

            toggleIsAuth ( {
                ...isAuth,
                isAuth : true,
                user : {
                    username : result.data.username,
                    email : result.data.email,
                    id : result.data.id,
                },
                status : 'done',
            } );

            if (redirectUrl) {
                history.push (redirectUrl);
            }

        } catch (e) {
            localStorage.clear ();
            console.log ("no user has registered yet");
            toggleIsAuth ({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={ contextData }>
            { isAuth.status === 'done' ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
