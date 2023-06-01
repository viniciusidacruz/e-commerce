import { IProduct } from "@/models";
import { formatToBRL } from "brazilian-values";

export const calcTotalPrice = (products: IProduct[]) => {
  const totalPrice = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  return formatToBRL(totalPrice);
};
