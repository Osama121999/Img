import React from "react";
import FbImageLibrary from "react-fb-image-grid";
// import FbImageLibrary from 'react-fb-image-grid'


// images
import img1 from "../Nav/img/1.jpg";
import img2 from "../Nav/img/2.jpg"
import img3 from "../Nav/img/3.jpg";
import img4 from "../Nav/img/4.jpg";
import img5 from "../Nav/img/5.jpg";

// image array
const images = [img1, img2, img3, img4, img5];


export default function Main() {
  return (
      <FbImageLibrary images={images} />
  );
}
