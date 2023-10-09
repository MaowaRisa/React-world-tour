import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    const {country, handleVisitedCountry, handleVisitedFlags} = props
    return (
        <div style={{textAlign: 'left'}}>
            <hr />
            <h4>Country Detail</h4>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            >
            </CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;