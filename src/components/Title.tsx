type TitlePropsType={
    cityName:string
}
const Title=({cityName}:TitlePropsType)=>{
    return (
        <h1>React World Weather in {cityName}</h1>
    )
};

export default Title;