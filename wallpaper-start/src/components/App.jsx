import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./App.css";

import imageZero from "./../photos/0.png";
import imageOne from "./../photos/1.png";
import imageTwo from "./../photos/2.png";
import imageThree from "./../photos/3.png";
import imageFour from "./../photos/4.png";
import imageFive from "./../photos/5.png";
import imageSix from "./../photos/6.png";

const App = () => {
  return (
    <div className="app">
      <Carousel>
        <img
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          alt="imgZero"
          src={imageZero}
        />
        <img
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          alt="imgOne"
          src={imageOne}
        />
        <img
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          alt="imgTwo"
          src={imageTwo}
        />
        <img
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          alt="imgOne"
          src={imageThree}
        />
        <img
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          alt="imgOne"
          src={imageFour}
        />
        <img
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          alt="imgOne"
          src={imageFive}
        />
        <img
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          alt="imgOne"
          src={imageSix}
        />
      </Carousel>
    </div>
  );
};

export default App;
