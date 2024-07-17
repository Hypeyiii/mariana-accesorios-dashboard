/* eslint-disable @next/next/no-img-element */

import { getProducts } from "@/lib/data";
import { baskervville, teko } from "@/lib/fonts";
import { TProduct } from "@/lib/types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function ProductList() {
  const products: TProduct[] = await getProducts();
  return (
    <div className="col-span-12 flex flex-col gap-2">
      <span className="flex flex-row justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Productos</h1>
        <Link
          href="/dashboard/products/create"
          className={`${teko.className} uppercase text-sm md:text-xl px-4 py-2 bg-green-500 text-white rounded-lg`}
        >
          Agregar producto
        </Link>
      </span>
      <table
        className={`${baskervville.className} w-full text-center border-collapse`}
      >
        <thead>
          <tr className="text-gray-300 border border-white/20">
            <th className="p-3 text-center text-sm md:text-lg">Imagen</th>
            <th className="p-3 text-center text-sm md:text-lg">Nombre</th>
            <th className="p-3 text-center text-sm md:text-lg">Descripción</th>
            <th className="p-3 text-center text-sm md:text-lg">Precio</th>
            <th className="p-3 text-center text-sm md:text-lg">Categoría</th>
            <th className="p-3 text-center text-sm md:text-lg">
              Fecha de creación
            </th>
            <th className="p-3 text-center text-sm md:text-lg">Editar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-white/5 border border-white/20 transition-colors duration-200 text-white cursor-pointer"
            >
              <td className={`text-xs md:text-base p-3`}>
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className={`text-xs md:text-base p-3`}>{product.name}</td>
              <td className={`text-xs md:text-base p-3`}>
                {product.description}
              </td>
              <td className={`text-xs md:text-xl p-3`}>${product.price}.00</td>
              <td className={`text-xs md:text-base p-3`}>{product.category}</td>
              <td className={`text-xs md:text-base p-3`}>
                {new Date(product.created_at).toLocaleDateString()}
              </td>
              <td className={`text-xs md:text-base text-center p-3`}>
                <Link
                  href={`/dashboard/products/edit/${product.route}`}
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
