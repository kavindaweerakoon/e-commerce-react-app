import Discounted from '../components/Discounted';
import Explorer from '../components/Explore';
import Featured from '../components/Featured';
import Highlights from '../components/Highlights';
import Landing from '../components/Landing';

const Home = () => {
    return (
        <> 
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explorer/>
        </>
       
    );
}

export default Home;
