type ResultsPropsType={
    results:{
        country:string;
        cityName:string;
        temperature:string;
        conditionText:string;
        icon:string;
    }
}
//propsを受ける様々な記法
const Results=({results}:ResultsPropsType)=>{
    const {country,cityName,...rest}=results
    return(
        <div>
            {country && <div className="results-country">{results.country}</div>}
            {cityName && <div className="results-city">{results.cityName}</div>}
            {rest.temperature && <div className="results-temp">{results.temperature}<span> ℃</span></div>}
            {rest.conditionText && <div className="results-condition"><img src={results.icon}/><span>{results.conditionText}</span></div>}
        </div>
    )
};

export default Results;