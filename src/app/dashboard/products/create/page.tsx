import CreateProductForm from "@/components/dashboard/create-product-form";

export default function Create() {
  return (
    <div className="grid grid-cols-12 w-full md:w-[80%] m-auto p-2 md:p-5 gap-10">
      <CreateProductForm />
    </div>
  );
}
