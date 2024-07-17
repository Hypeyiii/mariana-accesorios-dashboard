"use client";

import { useActionState } from "@/hooks/useActionState";
import { create } from "@/lib/actions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CreateProductForm = () => {
  const [errorMessage, formAction, isPending, successMessage] =
    useActionState(create);

  const router = useRouter();

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        router.push("/dashboard/products");
      }, 2000);
    }
  }, [router, successMessage]);

  return (
    <form
      onSubmit={formAction}
      className="flex flex-col gap-2 col-span-12 text-white"
    >
      <div className="flex flex-col gap-1 justify-start items-start w-full">
        <label htmlFor="name">Nombre</label>
        <input
          className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col gap-1 justify-start items-start w-full">
        <label htmlFor="description">Descripción</label>
        <input
          className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
          type="text"
          id="description"
          name="description"
          required
        />
      </div>
      <div className="flex flex-col gap-1 justify-start items-start w-full">
        <label htmlFor="price">Precio</label>
        <input
          className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
          type="number"
          id="price"
          name="price"
          required
        />
      </div>
      <div className="flex flex-col gap-1 justify-start items-start w-full">
        <label htmlFor="category">Categoría</label>
        <input
          className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
          type="text"
          id="category"
          name="category"
          required
        />
      </div>
      <div className="flex flex-col gap-1 justify-start items-start w-full">
        <label htmlFor="image_url">URL de la Imagen</label>
        <input
          className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
          type="text"
          id="image_url"
          name="image_url"
          required
        />
      </div>
      <div className="flex flex-col gap-1 justify-start items-start w-full">
        <label htmlFor="stock">Stock</label>
        <input
          className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
          type="number"
          id="stock"
          name="stock"
          required
        />
      </div>
      <div className="flex flex-col gap-1 justify-start items-start w-full">
        <label htmlFor="colors">Colores (separados por coma)</label>
        <input
          className="w-full rounded-full text-white bg-transparent border border-white/50 h-12 p-5 focus:outline-none"
          type="text"
          id="colors"
          name="colors"
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
        Crear Producto
      </button>
    </form>
  );
};

export default CreateProductForm;
