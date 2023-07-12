import './App.css';
import Navigation from './components/Navbar/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Erropages from './Pages/Erropages';
import Description from './Pages/Description';
import Trailer from './Pages/Trailer';


function App() {
  
  //console.log(movies)
  return (
    <div className="App">
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/movieList' element={<Movies />}/>
      <Route path='/*' element={<Erropages />}/>
      <Route path='/description/:id' element={<Description />}/>
      <Route path='/trailer/:id' element={<Trailer />}/>
    </Routes>
     
    </div>
  );
}

export default App;
