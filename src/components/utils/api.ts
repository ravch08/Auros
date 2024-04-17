import { number, string, z } from "zod";

export async function getTrendingProducts() {
  try {
    const res = await fetch(`http://localhost:3000/products`);
    const data = await res.json();
    return data.filter((product: ProductsProps) =>
      product.tags.includes("new"),
    );
  } catch (error) {
    throw new Error(`Could not fetch data.`);
  }
}

export async function getAllProducts() {
  try {
    const res = await fetch(`http://localhost:3000/products`);
    const data = await res.json();
    return data.filter(
      (product: ProductsProps) => !product.tags.includes("new"),
    );
  } catch (error) {
    throw new Error(`Could not fetch data.`);
  }
}

export const productsSchema = z.object({
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
});

export type ProductsProps = z.infer<typeof productsSchema>;
