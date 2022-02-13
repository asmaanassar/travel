import './Header.css';

function Header(props) {
    return (

        <>
            <h1 className="App-header" >Hello  {props.fName}   {props.lName} </h1>
        </>

    );
}

export default Header;