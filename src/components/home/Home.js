// import React, { Component } from "react";


// class Home extends Component {

   
//   render() {
//     return (
//         <div>
        
//       </div>
//     );
//   }
// }


import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
import pic4 from '../../images/pic4.jpg';
import pic5 from '../../images/pic5.jpg';
import './home.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className="home-img"src={pic1} onDragStart={handleDragStart} alt="food"/>,
  <img className="home-img" src={pic2} onDragStart={handleDragStart} alt="food2" />,
  <img className="home-img" src={pic3} onDragStart={handleDragStart} alt="food2" />,
  <img className="home-img" src={pic4} onDragStart={handleDragStart} alt="food2" />,
  <img className="home-img" src={pic5} onDragStart={handleDragStart} alt="food2" />,
//   <img src="path-to-img" onDragStart={handleDragStart} />,
];

const Home = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Home;


// import React, { Component } from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
 
// class Home extends Component {
//   render() {
//     return (
//       <CarouselProvider
//         naturalSlideWidth={20}
//         naturalSlideHeight={20}
//         totalSlides={3}
//       >
//         <Slider>
//           <Slide index={0}> <img className="home-img"src={bg} alt="food"/></Slide>
//           <Slide index={1}><img className="home-img" src={biteBank} alt="food2" />I am the second Slide.</Slide>
//           <Slide index={2}>I am the third Slide.</Slide>
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     );
//   }
// }

// export default Home;


