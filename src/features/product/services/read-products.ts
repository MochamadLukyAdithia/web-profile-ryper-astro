// read-products.ts
import type { ProductType } from "@/types/models/product-type";
import { ProductData } from "../data/product-data";

export function readProduct(): ProductType[] {
  return ProductData;
}
