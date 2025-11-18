import type { ProductType } from "@/types/models/product-type";

interface ProductCardProps {
  post: ProductType;
}

export default function ProductCard({ post }: ProductCardProps) {
  return (
    <div
      className="
        rounded-2xl overflow-hidden bg-white text-black shadow 
        transition-transform 
        md:hover:scale-[1.02]
      "
    >
      <a
        href={post.link || "#"}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <div className="relative w-full bg-gray-100">
          {post.image ? (
            <div
              className="
                w-full 
                aspect-[4/3]        /* mobile: proporsi nyaman */
                sm:aspect-[3/2]     /* tablet */
                md:aspect-[4/2.5]   /* laptop */
                lg:aspect-[4/2]     /* desktop */
                overflow-hidden
              "
            >
              <img
                src={post.image}
                alt={`Preview ${post.title}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div
              className="
                w-full 
                aspect-[4/3] 
                flex items-center justify-center 
                text-gray-600
              "
            >
              Gambar Preview belum tersedia
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg md:text-xl font-semibold mb-1 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-gray-600 break-all mb-3">
            {post.link || "—"}
          </p>

          <div className="flex gap-3 items-center">
            <button
              type="button"
              className="
                inline-block px-3 py-1 text-sm rounded-full 
                bg-gray-200 hover:bg-gray-300
              "
              onClick={(e) => {
                e.preventDefault();
                if (post.link)
                  window.open(post.link, "_blank", "noopener,noreferrer");
              }}
            >
              Go to Site
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
