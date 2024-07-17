import EditProduct from "@/components/dashboard/edit-product-form";
import { getProductByRoute } from "@/lib/data";

export default async function Page({ params }: { params: { route: string } }) {
  const { route } = params;

  const product = await getProductByRoute({ route });

  return (
    <div className="grid grid-cols-12 w-full md:w-[80%] m-auto p-2 md:p-5 gap-10">
      <EditProduct product={product} />
    </div>
  );
}
