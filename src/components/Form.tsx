type FormPropsType={
    city:string
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather:(e:React.FormEvent<HTMLFormElement>)=>void;
}



const Form=({city,setCity,getWeather}:FormPropsType)=>{


    return (
        <form  onSubmit={getWeather}>
            <input type="text" name="city" placeholder="city's name" value={city} onChange={e=>setCity(e.target.value)}/> 
            <button type="submit" >Get Weather</button>
        </form>
    )
};
export default Form;