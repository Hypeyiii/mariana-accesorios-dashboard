"use server";

import { createProduct, editProduct, editUser } from "./data";

export async function create(form: FormData) {
  try {
    const name = form.get("name") as string;
    const description = form.get("description") as string;
    const price = Number(form.get("price"));
    const category = form.get("category") as string;
    const image_url = form.get("image_url") as string;
    const stock = Number(form.get("stock"));
    const colors = (form.get("colors") as string).split(",");
    const product = await createProduct({
      name,
      description,
      price,
      category,
      image_url,
      stock,
      colors,
    });

    if (!product) {
      return { error: "No se pudo crear el producto" };
    }

    return { product: JSON.parse(JSON.stringify(product)) };
  } catch (err) {
    console.error("Error creando el producto:", err);
    return { error: "Ocurrió un error al crear el producto" };
  }
}

export async function edit(form: FormData) {
  try {
    const id = Number(form.get("id"));
    const name = form.get("name") as string;
    const description = form.get("description") as string;
    const price = Number(form.get("price"));
    const category = form.get("category") as string;
    const image_url = form.get("image_url") as string;
    const stock = Number(form.get("stock"));
    const colors = (form.get("colors") as string).split(",");
    const product = await editProduct({
      id,
      name,
      description,
      price,
      category,
      image_url,
      stock,
      colors,
    });

    if (!product) {
      return { error: "No se pudo editar el producto" };
    }

    return { product: JSON.parse(JSON.stringify(product)) };
  } catch (err) {
    console.error("Error editando el producto:", err);
    return { error: "Ocurrió un error al editar el producto" };
  }
}

export async function userEdit(form: FormData) {
  try {
    const id = form.get("id") as string;
    const username = form.get("username") as string;
    const email = form.get("email") as string;
    const role = form.get("role") as string;

    const user = await editUser({ id, username, email, role });

    if (!user) {
      return { error: "No se pudo editar el usuario" };
    }

    return { user: JSON.parse(JSON.stringify(user)) };
  } catch (err) {
    console.error("Error editando el usuario:", err);
    return { error: "Ocurrió un error al editar el usuario" };
  }
}