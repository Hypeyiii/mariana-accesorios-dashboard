/* eslint-disable @next/next/no-img-element */

import { getUsers } from "@/lib/data";
import { baskervville } from "@/lib/fonts";
import { TUser } from "@/lib/types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function UserList() {
  const users: TUser[] = await getUsers();

  return (
    <div className="col-span-12 flex flex-col gap-2">
      <h1 className="text-white text-2xl font-semibold">Usuarios</h1>
      <table
        className={`${baskervville.className} w-full h-[400px] text-center border-collapse`}
      >
        <thead>
          <tr className="text-gray-300 border border-white/20">
            <th className={`p-3 text-xs md:text-base`}>Avatar</th>
            <th className={`p-3 text-xs md:text-base`}>Usuario</th>
            <th className={`p-3 text-xs md:text-base`}>Email</th>
            <th className={`p-3 text-xs md:text-base`}>Rol</th>
            <th className={`p-3 text-xs md:text-base`}>Ordenes realizadas</th>
            <th className={`p-3 text-xs md:text-base`}>Monto pagado</th>
            <th className={`p-3 text-xs md:text-base`}>Creación</th>
            <th className={`p-3 text-xs md:text-base`}>Editar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-white/5 border border-white/20 transition-colors duration-200 text-white cursor-pointer"
            >
              <td className={`text-sm md:text-xl p-3`}>
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className={`text-sm md:text-xl p-3`}>{user.username}</td>
              <td className={`text-sm md:text-xl p-3`}>{user.email}</td>
              <td className={`text-sm md:text-xl p-3`}>{user.role}</td>
              <td className={`text-sm md:text-xl p-3`}>{user.order_count}</td>
              <td className={`text-sm md:text-xl p-3`}>
                ${user.total_amount ? user.total_amount / 100 + ".00" : ""}
              </td>
              <td className={`text-sm md:text-xl p-3`}>
                {new Date(user.created_at).toLocaleDateString()}
              </td>
              <td className={`text-xs md:text-base text-center p-3`}>
                <Link
                  href={`/dashboard/users/edit/${user.id}`}
                  className="text-blue-500 flex items-center justify-center"
                >
                  <PencilSquareIcon className="size-6" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
