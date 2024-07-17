import UserChart from "@/components/dashboard/chart";
import HeaderDashboard from "@/components/dashboard/header";
import LatestOrders from "@/components/dashboard/latest-orders";
import LatestUsers from "@/components/dashboard/latest-users";
import {
  ChartSkeleton,
  HeaderDashboardSkeleton,
  LatestUsersSkeleton,
} from "@/components/dashboard/skeletons";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 w-full md:w-[80%] m-auto p-2 md:p-5 gap-10 min-h-screen">
        <Suspense fallback={<HeaderDashboardSkeleton />}>
          <HeaderDashboard />
        </Suspense>
        <Suspense fallback={<ChartSkeleton />}>
          <UserChart />
        </Suspense>
        <Suspense fallback={<LatestUsersSkeleton />}>
          <LatestUsers />
        </Suspense>
        <Suspense fallback={<LatestUsersSkeleton />}>
          <LatestOrders />
        </Suspense>
      </div>
    </>
  );
}
