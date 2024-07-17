import { ChartBarSquareIcon, UserIcon } from "@heroicons/react/16/solid";
import { BuildingStorefrontIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export const sideVarRouter = [
  {
    icon: <ChartBarSquareIcon className="size-6" />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <UserIcon className="size-6" />,
    title: "Usuarios",
    path: "/dashboard/users",
  },
  {
    icon: <BuildingStorefrontIcon className="size-6" />,
    title: "Ordenes",
    path: "/dashboard/orders",
  },
  {
    icon: <ShoppingBagIcon className="size-6" />,
    title: "Productos",
    path: "/dashboard/products",
  },
];
