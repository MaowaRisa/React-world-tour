const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <p><small>{country.name.common}</small></p>
        </div>
    );
};

export default CountryData;