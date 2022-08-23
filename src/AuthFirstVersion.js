import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const history = useHistory();

    useEffect(() => {
        // is er een token?
        const token = localStorage.getItem('token');

        // En zo ja, is deze nog geldig? (zelf nog functie invoegen)
        if (token) {
            // ZO JA: haal opnieuw de gebruikersdata op en zet deze in de state
            async function getUserData() {
                // we decoden de token
                const decodedToken = jwt_decode(token);

                try {
                    const response = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });

                    // We setten de state met de gegevens
                    toggleAuth({
                        isAuth: true,
                        user: {
                            email: response.data.email,
                            username: response.data.username,
                            id: response.data.id,
                        },
                        status: 'done',
                    })
                } catch(e) {
                    toggleAuth({
                        ...auth,
                        status: 'error',
                    });
                    // voor de zekerheid de eventuele token uit de localStorage halen!
                    // Je haalt alles er nu uit zodat je niet constant in dezelfde FOUT komt
                    //OMdat ie de hele tijd dezelfde token laad die misschien verlopen is
                    // NU LAAD JE DUS ALLES OPNIEUW met LINE 55 en 56
                    localStorage.clear();
                    console.error(e);
                }
            }

            getUserData();
        } else {
            // ZO NEE: doe verder niks en ga verder met je leven
            toggleAuth({
                ...auth,
                status: 'done',
            });
        }
    }, []);

    function login(token) {
        // decode de token om te kijken wanneer hij verloopt en welke info erin zit
        const decodedToken = jwt_decode(token);
        console.log(decodedToken);

        // 1. Zet de token in de localStorage
        localStorage.setItem('token', token);
        // 2. Haal, indien nodig, de gebruikersgegevens uit de backend op:
        // async function getData() {
        // };

        // 3. Zet de gebruikersgegevens (MAAR NIET DE JWT) in de context state:
        toggleAuth({
            ...auth,
            isAuth: true,
            user: {
                email: decodedToken.email,
                id: decodedToken.sub,
            },
            status: 'done',
        });

        console.log('De gebruiker is ingelogd!');
        history.push('/profile');
    }

    function logout() {
        console.log('De gebruiker is uitgelogd!');
        toggleAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        history.push('/');
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {/*{auth.status === 'done' ? children : <p>Loading...</p>}*/}
            {auth.status === 'done' && children}
            {auth.status === 'pending' && <p>Loading...</p>}
            {auth.status === 'error' && <p>Error! Refresh de pagina!</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
