import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Sponsor from './components/Sponsor';
import Archive from './components/Archive';
import Issue from './components/Issue';

import Social from './components/Social';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='sponsor' element={<Sponsor />} />
        <Route path='issues' element={<Archive />}></Route>
        <Route path='issues/:slug' element={<Issue />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <BrowserRouter>
//   <Routes>
//     <Route path='/' element={<Home />}>
//       {/* <Route index element={<Home />} /> */}
//       <Route path='/about' element={<about />} />
//       <Route path='sponsor' element={<Sponsor />} />
//       <Route path='archive' element={<Archive />}>
//         <Route path=':issue' element={<Issue />} />
//       </Route>
//     </Route>
//   </Routes>
// </BrowserRouter>;
