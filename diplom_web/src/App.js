import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BeforeHeader from './components/Before-Header/Before-Header';
import BHeaderHr from './components/Before-Header-Hr/Before-Header-Hr';
import Header from "./components/Header/Header";
import Catalog from './components/Catalog/Catalog';
import Slogan from './components/Slogan/Slogan';
import Advantages from './components/Advantages/Advantages';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Feedback from './components/Feedback/Feedback';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import ManipulatingComponentOutSideSwiper from './components/Swiper/Swiper';
import WorksContent from './components/Works/Works-Content/Works-Content';
import useScrollToHash from './hooks/useScrollToHash';

function Home() {
  useScrollToHash();
  return (
    <>
      <ManipulatingComponentOutSideSwiper />
      <Catalog />
      <Slogan />
      <Advantages />
      <Services />
      <Reviews />
      <Feedback />
      <Faq />
    </>
  );
}

function Works() {
  return (
    <>
      <WorksContent />
    </>
  );
}

function App() {
  return (
    <Router>
      <BeforeHeader />
      <BHeaderHr />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
