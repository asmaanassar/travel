
import './Tours.css';
function Tours(props) {

    return (
        <>
            {props.data.map(item => {
                return (
                    <div>
                        <img src={item.image} alt={item.name} />
                        <h3>Name : {item.name}</h3>
                        <p>Price : {item.price}</p>
                        <p>Info:{item.info}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Tours;

