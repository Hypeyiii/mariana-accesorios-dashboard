/* eslint-disable @next/next/no-img-element */

import { getOrders } from "@/lib/data";
import { baskervville } from "@/lib/fonts";
import { TOrder } from "@/lib/types";

export default async function OrderList() {
  const orders: TOrder[] = await getOrders();

  return (
    <>
      <div className="flex flex-col gap-2 col-span-12">
        <h2 className="text-lg md:text-2xl font-semibold text-white mb-4">
          Últimas ordenes
        </h2>
        <table
          className={`${baskervville.className} w-full h-[400px] text-center border-collapse`}
        >
          <thead>
            <tr className="text-gray-300 border border-white/20">
              <th
                className={`${baskervville.className} p-3 text-xs md:text-base`}
              >
                Usuario
              </th>
              <th
                className={`${baskervville.className} p-3 text-xs md:text-base`}
              >
                Monto
              </th>
              <th
                className={`${baskervville.className} p-3 text-xs md:text-base`}
              >
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-white/5 border border-white/20 transition-colors duration-200 text-white cursor-pointer"
              >
                <td
                  className={`${baskervville.className} flex flex-row gap-2 items-center text-sm md:text-xl p-3`}
                >
                  <img
                    src={`https://avatar.iran.liara.run/public/${order.id}`}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="flex flex-col justify-start items-start">
                    <h1 className="text-white text-base">{order.username}</h1>
                    <h2 className="text-white/60 text-sm">{order.email}</h2>
                  </span>
                </td>
                <td
                  className={`${baskervville.className} text-sm md:text-xl p-3`}
                >
                  ${order.amount / 100}.00
                </td>
                <td
                  className={`${baskervville.className} text-sm md:text-xl p-3`}
                >
                  {new Date(order.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
