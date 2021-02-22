import Search from '../components/search'
import Statistic from '../components/statistic';

function Home() {
    return (
        <div className="Home">
            <Search />
            <Statistic data={{
                data1: [
                    { value: 1048, name: '1' },
                    { value: 735, name: '2' },
                    { value: 580, name: '3' },
                    { value: 484, name: '4' },
                    { value: 300, name: '5' }
                ],
                data2: [
                    { value: 524, name: '6' },
                    { value: 1048, name: '7' },
                    { value: 225, name: '8' },
                    { value: 795, name: '9' },
                    { value: 100, name: '10' }
                ]
            }} />

        </div>
    );
}

export default Home;
