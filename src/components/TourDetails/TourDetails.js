import data from '../../data.json';
import './TourDetails.css'
import { useParams } from 'react-router-dom';
import { useState } from "react";
function TourDetails() {
    const [showMore, setshowmore] = useState(false);
    const { id } = useParams();
    const city = data.filter((value) => value.id === id);
    return (
        <>
            <h1>{city[0].name}</h1>
            <p>
            {showMore
                ? `Description : ${city[0].info}`
                : `Descreption: ${city[0].info.substring(0, 200)}`
            }
            <button onClick={() => setshowmore(!showMore)}>
                {showMore ? "showless" : "showmore"}

            </button>
            </p>
            <p>{city[0].price}</p>
            <img src={city[0].image} alt={city[0].name}/>
           
        </>

    );
}

export default TourDetails;