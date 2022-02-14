import data from '../../data.json';
import './TourDetails.css'
import { useParams } from 'react-router-dom';
import { useState } from "react";
function TourDetails() {
    
    const [showMore, setshowmore] = useState(false);
    const handlShowme = () =>{
        setshowmore(!showMore) 
     }

    const {id}= useParams();
    const city  = data.filter((item,idx)=>{

     return (idx==id)
    
    })
    let moreInfo=city[0].info;
    let lessInfo=city[0].info.substring(0, 150);
    return (
        <>
        <h1>{city[0].name}</h1>
        <div>
        {showMore ? {moreInfo} : {lessInfo}}
        {showMore ? <button onClick={handlShowme}>More</button> :  <button onClick={handlShowme}>Less</button>}
        </div>  
        </>
       
    );
}

export default TourDetails;