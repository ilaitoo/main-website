"use client";

import styled from "styled-components";
import WhiteBox from "./WhiteBox";
import { useState } from "react";

const Image = styled.div`
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  height: 50px;
  width: 50px;
  transition: all 0.3s ease-in-out;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1),
    -4px -4px 10px rgba(255, 255, 255, 0.5);
  &:hover {
    transform: scale(1.05);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.2),
      -6px -6px 15px rgba(255, 255, 255, 0.6);
  }
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
const ProductImagesContainer = styled.div`
  display: flex;
  gap: 20px;
  max-height: 500px;
  margin: 20px 20px 0;
  flex-wrap: wrap;
  img {
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActiveImage = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  function ShowImage(img) {
    setActiveImage(img);
  }
  return (
    <ImagesWrapper>
      <ActiveImage>
        <img src={activeImage} alt="" />
      </ActiveImage>
      <ProductImagesContainer>
        {images?.map((img) => (
          <Image key={img} onMouseOver={() => ShowImage(img)}>
            <img src={img} alt="" />
          </Image>
        ))}
      </ProductImagesContainer>
    </ImagesWrapper>
  );
}
