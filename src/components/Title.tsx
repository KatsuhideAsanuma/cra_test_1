type TitlePropsType={
    cityName:string
}
const Title=(props:TitlePropsType)=>{
    return (
        <h1>React World Weather in {props.cityName}</h1>
    )
};

export default Title;