import Header from "../components/Header";
import Featured from "../components/Featured";
import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import NewProducts from "@/components/NewProducts";

export default async function Home() {
  const { featuredProduct, newProducts } = await fetchProducts();

  return (
    <div>
      <Header />
      <Featured product={serialize(featuredProduct)} />
      <NewProducts products={serialize(newProducts)} />
    </div>
  );
}
async function fetchProducts() {
  const featuredProductId = "67abab6ef67c1c5bb7a83ac0";
  await mongooseConnection();
  const featuredProduct = await Product.findById(featuredProductId).lean();
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 8,
  }).lean();
  return { featuredProduct, newProducts };
}
function serialize(data) {
  if (!data) return null;
  if (Array.isArray(data)) {
    return data.map(serialize);
  }
  return {
    ...data,
    _id: data._id?.toString(),
    category: data.category?.toString(),
    parent: data.parent?.toString(),
  };
}
