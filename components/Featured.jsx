"use client";
import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import CartIcon from "./icons/Cart";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 2.7rem;
  }
`;

const Description = styled.p`
  color: #888888;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 150px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    div:nth-child(2) {
      order: 2;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

// const HeroImage = styled.img`
//   /* display: none; */
//   @media (min-width: 768px) {
//     display: flex;
//     align-items: center;
//   }
// `;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <Bg>
        <Center>
          <ColumnsWrapper>
            <Column>
              <div>
                <Title>{product?.title}</Title>
                <Description>{product?.description}</Description>
                <ButtonsWrapper>
                  <ButtonLink href={"/product/" + product?._id} black={"true"}>
                    Read more
                  </ButtonLink>
                  <Button onClick={() => addProduct(product._id)}>
                    <CartIcon />
                    Add to cart
                  </Button>
                </ButtonsWrapper>
              </div>
            </Column>
            <Column>
              <img
                src="/images/model_mba_m2__cfrbip6c05yq_large_2x-removebg-preview.png"
                alt="Featured Image"
              />
            </Column>
          </ColumnsWrapper>
        </Center>
      </Bg>
    </>
  );
}
