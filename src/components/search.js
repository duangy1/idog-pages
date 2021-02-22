
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Route, Link } from 'react-router-dom';

function Search() {
  return (
    <div>
      <div>
        <Box color="primary.main" />Multi omics/Single Cell

          <input type="search" placeholder="Search for gene/protein" style={{ width: '40%', height: '30px', padding: '0 20px', margin: '50px 0 0 100px' }}></input>
        <Button variant="contained" color="primary" style={{ margin: '0 30px' }}>
          Search
        </Button>
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

