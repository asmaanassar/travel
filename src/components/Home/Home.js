import '../../App.css';
import data from '../../data.json';
import Tours from '../Tours/Tours';
function Home() {
  return (
    <>
      <Tours data={data} />
    </>
  );
}

export default Home;