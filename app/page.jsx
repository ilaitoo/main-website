import Container from "@/components/Container";
import CopyRights from "@/components/CopyRights";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeaderSlider from "@/components/home/HeaderSlider";
import LevelUp from "@/components/home/LevelUp";
import PopularProducts from "@/components/home/PopularProducts";
import Subscribe from "@/components/home/Subscribe";
import delay from "@/lib/lib";

export default async function Home() {
  await delay();

  return (
    <>
      <HeaderSlider />
      <PopularProducts />
      <FeaturedProducts />
      <LevelUp />
      <Subscribe />
    </>
  );
}
