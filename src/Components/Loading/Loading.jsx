import Loading from "../../images/1479.gif"
import "./Loading.css"


const Loader = () => {
    return ( 
        <div className="loader_container">

            <img className="loader" src={Loading} alt="loading"  />
        
        </div>
     );
}
 
export default Loader;