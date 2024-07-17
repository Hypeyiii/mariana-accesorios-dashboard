/* eslint-disable @next/next/no-img-element */
"use client";

import { useActionState } from "@/hooks/useActionState";
import { edit } from "@/lib/actions";
import { TProduct } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function EditProduct({ product }: { product: TProduct }) {
  const [errorMessage, formAction, isPending, successMessage] =
    useActionState(edit);
  const router = useRouter();

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        router.push("/dashboard/products");
      }, 2000);
    }
  }, [router, successMessage]);

  return (
    <div className="col-span-12 flex flex-col gap-2">
      <h2 className="text-white text-2xl font-bold">Editar Producto</h2>
      <form onSubmit={formAction} className="flex flex-col gap-2">
        <input type="hidden" name="id" value={product.id} />
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="name">
            Nombre
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="text"
            id="name"
            name="name"
            defaultValue={product.name}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="description">
            Descripción
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="text"
            id="description"
            name="description"
            defaultValue={product.description}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="price">
            Precio
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="number"
            id="price"
            name="price"
            defaultValue={product.price}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="category">
            Categoría
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="text"
            id="category"
            name="category"
            defaultValue={product.category}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="image_url">
            URL de la Imagen
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="text"
            id="image_url"
            name="image_url"
            defaultValue={product.image_url}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="stock">
            Existencias
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="number"
            id="stock"
            name="stock"
            defaultValue={product.stock}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="colors">
            Colores
          </label>
          <input
            className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
            type="text"
            id="colors"
            name="colors"
            defaultValue={product.colors.join(",")}
            required
          />
        </div>
        {isPending && <p className="text-white text-xl">Enviando...</p>}
        {errorMessage && <p className="text-red-500 text-xl">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-500 text-xl">{successMessage}</p>
        )}
        <button
          className="px-4 py-2 bg-green-500 text-white"
          type="submit"
          disabled={isPending}
        >
          Editar Producto
        </button>
      </form>
    </div>
  );
}
