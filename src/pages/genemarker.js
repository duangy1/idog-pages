import Heatmap from '../resources/heatmap.png'
import Table from "../components/table";
function Genemarker() {
    return (
        <div className="singlecell" >
            <text className="title" style={{ fontSize: '50px', paddingLeft: '50px', fontFamily: 'fantasy', color: '#1F497D' }}>Single Cell Brain Atlas</text>
            <div style={{ textAlign: 'center' }} >
                <img src={Heatmap} className='clusterimg' style={{ width: '80%' }} ></img>
            </div>
            <div style={{ padding: '80px 100px' }}>
                <text style={{ fontWeight: 'bold' }}>Gene Marker List</text>
                <Table />
            </div>
        </div>
    );
}

export default Genemarker;