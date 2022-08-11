import React,{useContext,useEffect,useState} from 'react';
import axios from 'axios';
import "./Bio.css"
import {Link} from "react-router-dom";

const apiKey = 'a0aac18fb528d2c26cc33ed4a52c554a';

function Bio() {
    const [person,setPerson] = useState ([]);
    const [endpoint,setEndpoint] = useState (`https://api.themoviedb.org/3/person/2963?api_key=${ apiKey }&language=en-US`);
    const [loading,toggleLoading] = useState (false);
    const [error,setError] = useState (false);

    useEffect (() => {
        const controller = new AbortController ();

        async function fetchData() {
            toggleLoading (true);
            setError (false);

            try {
                const {data} = await axios.get (endpoint,{signal: controller.signal,});
                setPerson (data);
                console.log (data);
            } catch (e) {
                console.error (e);
                setError (true);
            }

            toggleLoading (false);
        }

        fetchData ();

        return function cleanup() {
            console.log ("we gaan eraan..")
            controller.abort ();
        }
    },[]);


    function openTab() {
        window.open (`https://www.imdb.com/name/nm0000115/?ref_=fn_al_nm_1`);
    }

    return (
        <>
            { loading && <p>LOADING...</p> }
            { error && <p>DATA ERROR</p> }


            <div>
                <section>
                    <div className="bio-container">
                        <p><b>{ person.name }</b></p>
                        <p>{ person.birthday }</p>
                        <p>{ person.place_of_birth }</p>
                        <Link to>
                            <button className="imdb-button" onClick={ openTab }>IMDB</button>
                        </Link>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Bio;
