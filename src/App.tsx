
import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from './components/Loading';
import './App.css';

type ResultStateType={
  country:string;
  cityName:string;
  temperature:string;
  conditionText:string;
  icon:string;
}

function App() {
  const [loading,setLoading]=useState<boolean>(false);
  const [city,setCity]=useState<string>("Tokyo");
  const [result,setResult]=useState<ResultStateType>({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  })
  const getWeather=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setLoading(true);
      fetch(`https://api.weatherapi.com/v1/current.json?key=c835462ea81d49659ec44305232401&q=${city}&aqi=no`)
      .then(res=>res.json())

      .then(data=>{
        setResult({
          country:data.location.country,
          cityName:data.location.name,
          temperature:data.current.temp_c,
          conditionText:data.current.condition.text,
          icon:data.current.condition.icon
        })
        setCity("");
        setLoading(false);
      })
      .catch(er=>{
        alert("input correct city name");
        console.log(er)
      })

      
  }
  return (
    <div className="wrapper">
      <div className="container">
      <Title />
      <Form city={city} setCity={setCity} getWeather={getWeather}/>     
      {loading ? <Loading cityName={city}/>:<Results results={result}/>}
      </div>
    </div>
  );
}

export default App;

