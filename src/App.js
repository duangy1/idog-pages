import logo from './logo.svg';
import Header from './components/header';
import Title from './components/title'
import Navigator from './components/navigator'
import Toggle from './components/toggle-nav'
import Search from './components/search'
import Gridbox from './components/gridbox' 
// import Connect from './components/chart'

import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      {/* <Header /> */}
      <Navigator />
      <Toggle />
      <Search />
      {/* <Chart /> */}
    </div>
  );
}

export default App;
