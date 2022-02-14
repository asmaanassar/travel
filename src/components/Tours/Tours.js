
import Tour from './Tour/Tour';
function Tours(props) {

    return (
       
            props.data.map((item,id) => {
                return (
                  <Tour tour={item} index={id}/>
        
                );
            })
       
    );
}

export default Tours;

