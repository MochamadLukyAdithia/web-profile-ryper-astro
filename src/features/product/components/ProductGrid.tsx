import ProductCard from "./ProductCard";
import type { ProductType } from "@/types/models/product-type";

export type ProductGridProps = {
  posts: ProductType[];
};

export default function ProductGrid({ posts }: ProductGridProps) {
  return (
    <section
      id="product-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 px-12"
    >
      {posts.map((post) => (
        <ProductCard key={post.id_product} post={post} />
      ))}

      {posts.length === 0 && (
        <div className="col-span-full text-center text-gray-400">
          Tidak ada produk.
        </div>
      )}
    </section>
  );
}
