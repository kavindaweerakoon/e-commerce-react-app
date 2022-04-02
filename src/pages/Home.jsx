import Discounted from '../components/Discounted';
import Explorer from '../components/Explore';
import Featured from '../components/Featured';
import Highlights from '../components/Highlights';
import Landing from '../components/Landing';

const Home = () => {
    
    // this is the main page that renders the components for the home page.
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
