import React, { useState } from "react";


function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="slider">
      <img src={images[index]} alt="" />
      <button onClick={() => setIndex((index + 1) % images.length)}>
        Next
      </button>
    </div>
  );
}

export default ImageSlider;
