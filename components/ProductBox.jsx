"use client";
import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/Cart";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;
`;
const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03); /* Extra subtle shadow */
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 150px;
    margin: 0;
  }
`;
const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  width: 100%;
  margin: 8px 0;
  text-decoration: none;
  color: inherit;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  padding: 2px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-top: auto;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const url = "/product/" + _id;
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <ProductWrapper>
        <WhiteBox href={url}>
          <div>
            <img src={images?.[0]} alt="" />
          </div>
        </WhiteBox>
        <ProductInfo>
          <Title href={url}>{title}</Title>
          <PriceRow>
            <Price>${price}</Price>
            <Button onClick={() => addProduct(_id)}>Add to cart</Button>
          </PriceRow>
        </ProductInfo>
      </ProductWrapper>
    </>
  );
}
