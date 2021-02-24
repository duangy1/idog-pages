
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Route, Link } from 'react-router-dom';

function Search() {
  return (
    <div >
      <div style={{margin:"50px 200px"}}>
        <p style={{fontSize:"30px"}}>
            &nbsp;&nbsp;&nbsp;Welcome to The Cannie Brain Atlas. The Cannie Brain Atlas currently contains single cell RNA sequencing (scRNAseq) data from Hippocampus in brain tissue of six month Beagle and RNAseq data from six parts of brain

        </p>
        <div style={{margin:"0px 150px"}}>
          <Box color="primary.main" style={{margin:"0 0 0 100px"}}/>Multi omics/Single Cell

            <input type="search" placeholder="Search for gene/protein" style={{ width: '40%', height: '30px', padding: '0 20px', margin: '50px 0 0 100px' }}></input>
          <Button variant="contained" color="primary" style={{ margin: '0 30px' }}>
            Search
          </Button>
        </div>
      </div>
      <div style={{ padding: '80px' }}>
        <Button variant="contained" color="inherit" style={{ margin: '0 30px', width: '25%', height: '100px' }}>Multi omics</Button>
        <Link to={{ pathname: '/single-cell' }}>

          <Button variant="contained" color="primary" style={{ margin: '0 30px', width: '25%', height: '100px' }}>
            Single Cell Type
          </Button>
        </Link>
        <Button variant="contained" color="inherit" style={{ margin: '0 30px', width: '25%', height: '100px' }}>
          Download
        </Button>
      </div>
    </div>

  );
}

export default Search;

