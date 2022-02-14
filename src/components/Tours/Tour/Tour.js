import { Link } from 'react-router-dom';
function Tour(props) {
    return (
        

            <div key={props.id}>
                <img src={props.tour.image} alt={props.tour.name} />
                <h3>Name : {props.tour.name}</h3>
                <Link to={`/city/${props.index}`}> {props.tour.name} </Link>
            </div>


    )

}

export default Tour;