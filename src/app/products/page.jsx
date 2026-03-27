import { CardComponent } from "@/components/ui/CardComponent";

export default async function Page() {
  const res = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/products",
  );
  const products = await res.json();

  console.log(products);
  return (
    <>
      {/* className="w-[1200px] ml-10 mt-5 p-5  " */}
      <div>
        <h1 className="font-bold text-2xl">List all products</h1>
        <div className="grid grid-cols-4 gap-5  w-[1200px] ml-10 p-5 ">
          {products?.payload?.map((products) => (
            <CardComponent key={products.productId} products={products} />
          ))}
        </div>
      </div>
    </>
  );
}
