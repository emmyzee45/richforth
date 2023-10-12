import "./slider.css";
import { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className="slidercontainer">
      <div className="sliderarrowContainer" style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <img src="/img/arrowl.png" alt="/" className="sliderarrowimg"/>
      </div>
      <div className="sliderwrapper" style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className="sliderimgContainer" key={i}>
            <img src={img} alt="/" className="sliderimg" />
          </div>
        ))}
      </div>
      <div className="sliderarrowContainer" style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <img src="/img/arrowr.png" alt="/" className="sliderarrowimg"/>
      </div>
    </div>
  );
};

export default Slider;
