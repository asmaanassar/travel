
import {Link} from 'react-router-dom';
import Tour from './Tour/Tour';
function Tours(props) {

    return (
       <>
            {props.data.map((tour,idx) => {
                return (
                  <div key={idx}>
                  <Link to={`/city/${tour.id}`}>
                    <Tour tour={tour}/></Link>
                  </div>
                );
            })}
            </>
    );
}

export default Tours;

