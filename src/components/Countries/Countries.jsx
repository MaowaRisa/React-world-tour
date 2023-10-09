import { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    const handleVisitedCountry = country =>{
        console.log('Add visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    // Remove item from an array in a state
    // use filter to select all the elements except the one you want to remove 
    return (
        <>
        <h3>Countries: {countries.length}</h3>
        {/* Visited Country */}
        <div style={{backgroundColor: 'beige', color: 'black', textAlign:'left'}}>
            <h5>Visited Countries: {visitedCountries.length}</h5>
            <ul style={{display: 'flex', gap: '30px', fontStyle: 'italic', fontSize: '1.5rem', color: 'purple'}}>
                {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
            </ul>
        </div>
        <div style={{display: 'flex', gap: '10px'}} className='flag-container'>
            {
                visitedFlags.map((flag, idx) => <img key={idx} src={flag} />)
            }
        </div>
        {/* Display countries */}
        <div className='country-container'>
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
        </div>
        </>
    );
};

export default Countries;