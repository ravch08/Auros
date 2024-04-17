import { number, string, z } from "zod";

export async function getAllProducts() {
  try {
    const res = await fetch(`http://localhost:3000/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Could not fetch data.`);
  }
}

const productsSchema = z.object({
  id: number().optional(),
  title: string().min(4, {
    message: "Title must be atleast 4 characters long!",
  }),
  discount: number().positive({ message: "Discount must be positive" }),
  price: number().positive({ message: "Price must be positive" }),
  priceCrossed: number().positive({ message: "Price must be positive" }),
  tags: string().array(),
  imgSrc11: string().url(),
  imgSrc12: string().url(),
  quantity: number().optional(),
});

const cartSchema = z.object({
  id: number().optional(),
  title: string().min(4, {
    message: "Title must be atleast 4 characters long!",
  }),
  price: number().positive({ message: "Price must be positive" }),
  priceCrossed: number().positive({ message: "Price must be positive" }),
  imgSrc11: string().url(),
  quantity: number(),
});

const addToSchema = z.object({
  addCart: z.function(),
  addWishlist: z.function(),
  incrementQty: z.function(),
  decrementQty: z.function(),
  deleteCart: z.function(),
});

const productAddSchema = productsSchema.merge(addToSchema);

export type CartProps = z.infer<typeof cartSchema>;
export type ProductsProps = z.infer<typeof productsSchema>;
export type ProductAddProps = z.infer<typeof productAddSchema>;
