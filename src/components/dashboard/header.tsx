import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import HeaderCard from "./header-card";
import {
  getTotalAmount,
  getOrders,
  getPendingOrders,
  getUsers,
} from "@/lib/data";
import { ClockIcon } from "@heroicons/react/16/solid";

export default async function HeaderDashboard() {
  const orderStat = await getTotalAmount();
  const orders = await getOrders();
  const pendingOrders = await getPendingOrders();
  const users = await getUsers();

  return (
    <div className="col-span-12 grid grid-cols-4 w-full m-auto gap-5">
      <HeaderCard
        icon={<BanknotesIcon className="size-6 text-white" />}
        title="Ganancias"
        sign="$"
        stat={orderStat / 100}
      />
      <HeaderCard
        icon={<BuildingStorefrontIcon className="size-6 text-white" />}
        title="Ordenes"
        stat={orders.length}
      />
      <HeaderCard
        icon={<ClockIcon className="size-6 text-white" />}
        title="Ordenes pendientes"
        stat={pendingOrders.length}
      />
      <HeaderCard
        icon={<UserGroupIcon className="size-6 text-white" />}
        title="Usuarios registrados"
        stat={users.length}
      />
    </div>
  );
}
