// AppRouter

// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Base Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Router Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWatchlist from '../pages/PageWatchlist';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageNotFound from '../pages/PageNotFound';




function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" exact element={<PageAbout />} />
          <Route path="/watchlist" exact element={<PageWatchlist />} />
          <Route path="/movie/:id" exact element={<PageSingleMovie />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
