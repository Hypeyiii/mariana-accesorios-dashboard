/* eslint-disable @next/next/no-img-element */
"use client";

import { baskervville } from "@/lib/fonts";
import { TUser } from "@/lib/types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import { UserListSkeleton } from "./skeletons";

export default function UserList() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<TUser[]>([]);
  const [userTerm, setUserTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("fetchUsers error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter(
      (user) =>
        user.username.toLowerCase().includes(userTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(userTerm.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  }, [userTerm, users]);

  if (loading) {
    return (
        <UserListSkeleton />
    );
  }

  return (
    <div className="col-span-12 flex flex-col gap-2">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-white text-2xl font-semibold">Usuarios</h1>
        <input
          type="text"
          value={userTerm}
          onChange={(e) => setUserTerm(e.target.value)}
          placeholder="Buscar usuario"
          className="bg-transparent border border-white/40 rounded-lg h-8 w-[50%] focus:outline-none focus:border-white/60 text-white p-2"
        />
      </div>
      {filteredUsers.length > 0 ? (
        <table
          className={`${baskervville.className} w-full min-h-fit text-center border-collapse`}
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
            {filteredUsers.map((user) => (
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
      ) : (
        <p className="text-white text-center mt-32 md:text-3xl">
          No se encontraron usuarios
        </p>
      )}
    </div>
  );
}
