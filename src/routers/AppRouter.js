// AppRouter

// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from '../components/Header';

import About from '../pages/About';
import Watchlist from '../pages/Watchlist';


function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
            <Routes>
                <Route path="/about"  element={<About />} />
                <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
