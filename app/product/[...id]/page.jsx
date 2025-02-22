"use client";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import CartIcon from "@/components/icons/Cart";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import axios from "axios";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
  @media (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;

const PriceRaw = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
`;

export default function ProductPage() {
  const {
    id: [id],
  } = useParams();
  const { addProduct } = useContext(CartContext);
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get("/api/products?id=" + id).then((res) => {
      setProduct(res.data.product);
    });
  }, []);

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <div>
            {product?.images && <ProductImages images={product?.images} />}
          </div>
          <div>
            <Title>{product?.title}</Title>
            <p>{product.description}</p>
            <PriceRaw>
              <h2>${product.price}</h2>
              <Button onClick={() => addProduct(product?._id)}>
                <CartIcon />
                Add to cart
              </Button>
            </PriceRaw>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}
