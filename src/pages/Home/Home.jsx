import Navbar from '../../components/Navbar'
import Header from '../../components/Headers/Header'
import TopAnime from '../Rekomendasi/TopAnime';
import Rekomendasi from '../Rekomendasi/Rekomendasi';
import EpisodeTerbaru from '../Rekomendasi/EpisodeTerbaru';
import Footer from '../../components/Footer';

function Home() {
  return <>
  <div className='dark:bg-gray-700 overflow-hidden  dark:text-white'>
    <Navbar />
    <Header />
    <EpisodeTerbaru/>
    <TopAnime />
    <Rekomendasi/>
    <Footer/>
  </div>
  </>;
}

export default Home;
