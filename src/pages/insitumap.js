import CCBE1 from '../resources/CCBE1.png'
import Table from "../components/table";
import MarkerTable from "../components/markertable";
import Heatmap from '../resources/heatmap.png'
function Genemarker() {
    return (
        <div>
            <p style={{ fontSize: '30px', paddingLeft: '50px', fontFamily: 'fantasy', color: '#1F497D' }}>The detail information of ADARB2</p>
            <div style={{ margin: '0 100px' }}>
                <strong>Gene name:</strong>
                <text>fatty acid desaturase 2</text><br />
                <strong>Position:</strong>
                <text>chromosome 11   start position 1234    end position 4567</text><br />
                <strong>Gene synonym:</strong>
                <text>FADSD6, DES6, SLL0262, LLCDL2, D6D, TU13</text><br />
                <strong>Description: </strong>
            </div>
            <div className='experiment' >

                <p style={{ fontSize: '25px', paddingLeft: '50px', fontFamily: 'fantasy', color: '#1F497D' }}>Experiment</p>
                <div style={{ padding: '0 100px' }}>
                    <MarkerTable />
                </div>
                {/* <img src={CCBE1} style={{ width: '50%' }}></img> */}
            </div>
            {/* <text style={{ fontWeight: 'bold'}}>Gene Marker List</text> */}
            <div style={{ float: 'left', padding: '50px 50px', width: '80%', height: '80%' }}>
                <img src={Heatmap}></img>
            </div>
            <div style={{ width: '80%', textAlign: 'center', padding: '0 100px' }}>
                <Table />
            </div>

        </div>
    );
}

export default Genemarker;