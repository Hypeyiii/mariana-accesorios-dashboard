/* eslint-disable @next/next/no-img-element */
import { getLatestUsers } from "@/lib/data";
import { baskervville } from "@/lib/fonts";
import { TUser } from "@/lib/types";

export default async function LatestUsers() {
  const users: TUser[] = await getLatestUsers();

  return (
    <>
      <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
        <h2 className="text-lg md:text-2xl font-semibold text-white mb-4">
          Últimos usuarios
        </h2>
        <table
          className={`${baskervville.className} w-full h-[400px] text-center border-collapse`}
        >
          <thead>
            <tr className="text-gray-300 border border-white/20">
              <th className={`p-3 text-xs md:text-base`}>Avatar</th>
              <th className={`p-3 text-xs md:text-base`}>Usuario</th>
              <th className={`p-3 text-xs md:text-base`}>Email</th>
              <th className={`p-3 text-xs md:text-base`}>Rol</th>
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
                <td className={`text-sm md:text-base p-3`}>{user.username}</td>
                <td className={`text-sm md:text-base p-3`}>{user.email}</td>
                <td className={`text-sm md:text-base p-3`}>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
