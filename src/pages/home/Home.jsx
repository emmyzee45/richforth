import React from 'react';
import { cards } from '../../data';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';
import Footer from '../../components/footer/Footer';
// import Slide from '../../components/slide/Slide';
// import CatCard from '../../components/catCard/CatCard';
import Products from '../../components/product/Products';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide> */}
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
