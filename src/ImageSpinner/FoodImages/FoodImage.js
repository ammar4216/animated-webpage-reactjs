import React from "react";
import { useStore } from "../../Store/store";
import style from "./foodImage.module.css";

import img1 from "../../images/foodItems/image-0.png";
import img2 from "../../images/foodItems/image-1.png";
import img3 from "../../images/foodItems/image-2.png";
import img4 from "../../images/foodItems/image-3.png";
import img5 from "../../images/foodItems/image-4.png";

const images = [img1, img4, img5, img2, img3];

function FoodImage() {
  const index = useStore((state) => state.index);

  return (
    <>
      {images.map((item, ind) => {
        return (
          <img
            key={ind}
            src={images[ind]}
            className={`${style.food} ${
              ((index % 5) + 5) % 5 === ind && style.animate
            }`}
            alt="Food"
            loading="lazy"
            style={{ opacity: ((index % 5) + 5) % 5 === ind ? 1 : 0 }}
          />
        );
      })}
    </>
  );
}

export default FoodImage;
