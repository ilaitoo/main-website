"use client";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/StyledTable";
import WhiteBox from "@/components/WhiteBox";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  font-size: 0.8rem;
`;

const ProductImageBox = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  margin-bottom: 15px;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    padding: 10px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  margin: 0 10px;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const QuantityTd = styled.td`
  width: 120px;
`;

const TotalTd = styled.td`
  padding-top: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (cartProducts.length > 0) {
      fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify(cartProducts),
        headers: {
          "Content-type": "application/json",
        },
      }).then(async (res) => setProducts((await res.json()).productsData));
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  useEffect(() => {
    if (window.location.href.includes("succeeded")) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);
  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  async function goToPayment() {
    const data = {
      cartProducts,
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
    };
    const response = await axios.post("/api/checkout", data);
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price;
    total += price;
  }
  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <WhiteBox>
              <h2>Thanks for your order!</h2>
              <p>We will email you when your order will be sent.</p>
            </WhiteBox>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <WhiteBox>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            <Title>Cart</Title>
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <QuantityTd>
                        <Button onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </Button>
                      </QuantityTd>
                      <td>
                        $
                        {product.price *
                          cartProducts.filter((id) => id === product._id)
                            .length}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <TotalTd colSpan={"2"}>total</TotalTd>
                    <TotalTd>${total}</TotalTd>
                  </tr>
                </tbody>
              </Table>
            )}
          </WhiteBox>
          {!!cartProducts?.length && (
            <WhiteBox>
              <h2>Order information</h2>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAddress(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(ev) => setCountry(ev.target.value)}
              />
              <Button black="true" block="true" onClick={goToPayment}>
                Continue to payment
              </Button>
            </WhiteBox>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
