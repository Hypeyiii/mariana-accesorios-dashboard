import ProductList from "@/components/dashboard/products-list";
import { UserListSkeleton } from "@/components/dashboard/skeletons";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="grid grid-cols-12 w-full md:w-[80%] m-auto p-2 md:p-5 gap-10">
      <Suspense fallback={<UserListSkeleton />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
