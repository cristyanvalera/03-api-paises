import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios';
import { CountryCard } from './components/CountryCard';

function App() {
    const [country, setCountry] = useState();
    const [search, setSearch] = useState('venezuela');
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        let url = `https://restcountries.com/v3.1/name/${search}`;

        axios.get(url)
            .then(res => {
                setHasError(false);

                setCountry(res.data[0]);
            })
            .catch(err => {
                setHasError(true);

                console.log(err);
            });
    }, [search]);

    const textInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        setSearch(textInput.current.value.toLowerCase().trim());
    };

    return (
        <div className="app">
            <h1>Api de paises</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={textInput} />

                <button>Buscar</button>
            </form>

            {
                hasError
                    ? <p>Este país no existe: '{search}'</p>
                    : <CountryCard country={country} />
            }
        </div>
    );
}

export default App
