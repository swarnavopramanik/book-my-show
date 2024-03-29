import "./App.css";
import axios from "axios";
// Routing
import { Routes, Route } from 'react-router-dom';

// React slick css 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Pages
import Homepage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/Play.page';

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {}
axios.defaults.params["api_key"] = "d4182b00a561021c5ff7e3a953a8563a"


function App() {
  return (
    <Routes>
      <Route path= "/" element={<Homepage/>}/>
      <Route path= "/movie/:id" element={<MoviePage/>}/>
      <Route path= "/plays" element={<PlayPage/>}/>
    </Routes>
 
  );

}

export default App;
