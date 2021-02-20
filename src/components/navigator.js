import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { deepOrange} from '@material-ui/core/colors';
function Navigator() {
    return (
      
      <BottomNavigation
        onChange={(event, newValue) => {
          console.log('click')
        }}
        showLabels
        style={{backgroundColor:'#3296C8'}}
      >
        <BottomNavigationAction label="Home" style={{color:'white',fontSize:'50px'}}/>
        <BottomNavigationAction label="Browse" style={{color:'white'}}/>
        <BottomNavigationAction label="Search" style={{color:'white'}}/>
        <BottomNavigationAction label="Download" style={{color:'white'}}/>
        <BottomNavigationAction label="Help" style={{color:'white'}}/>
        <BottomNavigationAction label="About" style={{color:'white'}}/>
        
      </BottomNavigation>
    );
  }
  
export default Navigator;
  
