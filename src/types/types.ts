import { number, string, z } from "zod";

const productSchema = z.object({
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

const actionsSchema = z.object({
  addCart: z.function(),
  addWishlist: z.function(),
  incrementQty: z.function(),
  decrementQty: z.function(),
  deleteCart: z.function(),
});

const productAddSchema = productSchema.merge(actionsSchema);

export type CartProps = z.infer<typeof cartSchema>;
export type ProductsProps = z.infer<typeof productSchema>;
export type ProductAddProps = z.infer<typeof productAddSchema>;

export type initialStateProps = {
  cart: CartProps[];
  wishlist: CartProps[];
  totalPrice: number;
  totalCartQuantity: number;
};
