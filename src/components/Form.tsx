import { useState } from "react";

const Form=()=>{
    const [city,setCity]=useState<string>("");

    return (
        <form>
            <input type="text" name="city" placeholder="city's name" onChange={e=>setCity(e.target.value)}/> 
            {city}
            <button type="submit">Get Weather</button>
        </form>
    )
};
export default Form;