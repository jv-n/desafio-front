import {useNavigate} from "react-router-dom";

export function PageLayout(){

    const navigate = useNavigate();
    
   return(
    <>
        <div className="intro">
            <div className="title">
                <h1 className="textHeader" style={{fontFamily: 'Reddit Sans'}}> Baratheon Venison </h1>
            </div>
            
            <img className="imginn" src='/baratheon-venison.jpeg' alt='baratheon venison'> </img>
        </div>
    </>    
   )
}