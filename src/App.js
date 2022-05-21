import './index.css';
import NavBar from './components/NavBar';
import ReactDOM from 'react-dom/client';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Sponsor from './components/Sponsor';
import Archive from './components/Archive';
import Issue from './components/Issue';

// import Intro from './components/Intro';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import Social from './components/Social';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <div className='clearfix'></div>
      <main>
        <div className='main--content'>
          <Outlet />
        </div>
        <div className='clearfix'></div>
        <Social />
      </main>
      <footer>
        <div>
          Created by <a href='https://bryantcobo.com'>Bryant Cobarrubias</a>
        </div>
      </footer>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
