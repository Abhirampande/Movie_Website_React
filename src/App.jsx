import './css/App.css';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';
function app(){

  return (
      <>
      <div>
        <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </main>
      </div>

      </>
    );

  };



export default app;

