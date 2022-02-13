import '../App.css';
//import logo from '../logo.svg';
// import './App.css';
import Header  from '../Header/Header'; 
import data from '../../data.json';
import Tours from '../Tours/Tours';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      {/* add a new components header  */}
      <Header fName="Asma" lName="Nassar" color="pink" />
      
      {/* add a new components Tours   */}
     <Tours data={data}/>

     {/* add a new components Footer   */}
     <Footer/> 
    </>
  );
}

export default Home;