type TitlePropsType={
    cityName:string
}
const Title=(props:TitlePropsType)=>{
    console.log(props.cityName)
    return (
        <h1>World Weather</h1>        
    )
};

export default Title;