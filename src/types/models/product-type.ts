export type ProductCategory = "Produk RPL" | "Produk Aslab";

export interface ProductType {
    id_product: string;
    title: string;
    image: string;
    link: string;
    category: ProductCategory; 
}