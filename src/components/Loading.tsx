type LoadingPropsType={
    cityName:string
}
const Loading=({cityName}:LoadingPropsType)=> <div className="loading">{cityName}</div>
export default Loading;