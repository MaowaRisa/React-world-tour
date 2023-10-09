import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={flags.png} alt="" /> 
            <h3>{name?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: <a href="#">{cca3}</a></small></p>
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button><br />
            {visited ? 'I have visited this country' : 'I want to visit'}
            <CountryDetail 
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;