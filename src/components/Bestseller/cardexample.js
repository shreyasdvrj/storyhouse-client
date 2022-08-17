import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import "./Slide.css";
import { Slide } from "./Slide";
import ProductCard from "../Product/productCard.js"

const data = [
  {
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572261616l/52892857._SX318_SY475_.jpg",
    link: "http://localhost:3000/byTitle/The%20Color%20Purple"
    
  },
  {
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572098085l/18135._SY475_.jpg",
    link: "http://localhost:3000/byTitle/Romeo%20and%20Juliet"
  },
  {
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542l/18144590._SY475_.jpg",
    link: "http://localhost:3000/byTitle/The%20Alchemist"
  },
  {
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1382846449l/7144.jpg",
    
    link: "http://localhost:3000/byTitle/Crime%20and%20Punishment"
  },
  
];

function Pagination(props) {
  const { centerSlideDataIndex, updatePosition } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: 20
      }}
    >
      {data.map((_, index) => {
        const isCenterSlide = props.centerSlideDataIndex === index;
        return (
          <div
            onClick={() => {
              updatePosition(index);
            }}
            style={{
              height: 15,
              width: 15,
              borderRadius: "100%",
              background: isCenterSlide ? "black" : "none",
              border: "1px solid black",
              cursor: "pointer"
            }}
          />
        );
      })}
    </div>
  );
}

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);
  const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);
  const onCenterSlideDataIndexChange = (newIndex) => {
    setCenterSlideDataIndex(newIndex);
  };

  const updatePosition = (index) => {
    ref?.current?.swipeTo(index - centerSlideDataIndex);
  };

  return (
    <div className="bs-carasoul">
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={200}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
                onActiveSlideChange={onCenterSlideDataIndexChange}
              />
            );
          }}
        />
       
      </div>
      <Pagination
        updatePosition={updatePosition}
        centerSlideDataIndex={centerSlideDataIndex}
      />
    </div>
  );
};

export default CardExample;