import '../css/singlecell.css'
import cluster from '../resources/cluster.png'
import Table from "../components/table";
function Singlecell() {
  return (
    <div className="singlecell" >
      <text className="title" style={{ fontSize: '50px', paddingLeft: '50px', fontFamily: 'fantasy', color: '#1F497D' }}>Single Cell Brain Atlas</text>
      <div style={{ textAlign: 'center' }} >
        <img src={cluster} className='clusterimg' style={{ width: '80%' }} ></img>
      </div>
      <div style={{ padding: '80px 100px' }}>
        <Table />
      </div>
    </div>
  );
}

export default Singlecell;