import Home from "./pages/Home/Home"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import LihatTopAnime from "./pages/Lihat_lainnya/LihatTopAnime";
import LookAnime from "./pages/singleAnime/LookAnime";
import ListSearch from "./pages/ListSearch/ListSearch";
import LihatTerbaru from "./pages/Lihat_lainnya/LihatTerbaru";
import LihatRekomendasi from "./pages/Lihat_lainnya/LihatRekomendasi";
import AboutWebsite from "./components/AboutWebsite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/anime/:id" element={<LookAnime/>}/>
        <Route path="/all-now-anime" element={<LihatTerbaru/>}/>
        <Route path="/all-top-anime" element={<LihatTopAnime/>}/>
        <Route path="/all-recomendation-anime" element={<LihatRekomendasi/>}/>
        <Route path="/listSearch" element={<ListSearch/>}/>
        <Route path="/about" element={<AboutWebsite/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
