import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import App from './App.jsx'
import About from './pages/About.jsx'
import Rootine from './pages/Rootine.jsx'
import IMDb from './pages/IMDb.jsx'
import InteractionDesign from './pages/InteractionDesign.jsx'
import ToggleWiggle from './pages/interaction/ToggleWiggle.jsx'
import HandleHeat from './pages/interaction/HandleHeat.jsx'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/rootine" element={<Rootine />} />
        <Route path="/imdb" element={<IMDb />} />
        <Route path="/interaction-design" element={<InteractionDesign />} />
        <Route path="/interaction-design/toggle-wiggle" element={<ToggleWiggle />} />
        <Route path="/interaction-design/handle-heat" element={<HandleHeat />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
