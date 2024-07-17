/* eslint-disable @next/next/no-img-element */
"use client";

import { useActionState } from "@/hooks/useActionState";
import { userEdit } from "@/lib/actions";
import { TUser } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditUser({ user }: { user: TUser }) {
  const [loading, setLoading] = useState(false);
  const [eliminate, setEliminate] = useState<string>("");
  const [errorMessage, formAction, isPending, successMessage] =
    useActionState(userEdit);

  const router = useRouter();

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        router.push("/dashboard/users");
      }, 2000);
    }
  }, [router, successMessage]);

  const deleteUser = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/users?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        setEliminate("Error al eliminar el usuario");
        throw new Error("Failed to delete user");
      }

      const data = await response.json();

      if (data.success) {
        setEliminate("Usuario eliminado con éxito");
        router.push("/dashboard/users");
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      setEliminate("Error al eliminar el usuario");
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-12 flex flex-col gap-2">
      <h2 className="text-white text-2xl font-bold">Editar Usuario</h2>
      <form onSubmit={formAction} className="flex flex-col gap-2">
        <input type="hidden" name="id" value={user.id} />
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="name">
            Nombre de usuario
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="text"
            id="username"
            name="username"
            defaultValue={user.username}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="description">
            Correo electrónico
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="text"
            id="email"
            name="email"
            defaultValue={user.email}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="price">
            Rol
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="text"
            id="role"
            name="role"
            defaultValue={user.role}
            required
          />
        </div>
        {isPending && <p className="text-white text-xl">Enviando...</p>}
        {errorMessage && <p className="text-red-500 text-xl">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-500 text-xl">{successMessage}</p>
        )}
        {eliminate && <p className="text-red-500 text-xl">{eliminate}</p>}
        {loading && <p className="text-white text-xl">Eliminando...</p>}
        <div className="flex flex-row gap-2">
          <button
            className="px-4 py-2 bg-green-500 text-white"
            type="submit"
            disabled={isPending}
          >
            Editar Usuario
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white"
            onClick={() => deleteUser(user.id)}
          >
            Eliminar Usuario
          </button>
        </div>
      </form>
    </div>
  );
}
