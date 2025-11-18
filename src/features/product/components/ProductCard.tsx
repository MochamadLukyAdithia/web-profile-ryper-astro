import type { ProductType } from "@/types/models/product-type";

interface ProductCardProps {
  post: ProductType;
}

export default function ProductCard({ post }: ProductCardProps) {
  

  return (
    <div className="rounded-2xl overflow-hidden bg-white text-black shadow hover:scale-[1.02] transition-transform " >
      <a
        href={post.link || "#"}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <div className="relative">
          {post.image ? (
            <div className="w-full h-80 md:h-72 lg:h-80 bg-gray-100 relative overflow-hidden">
              <img
                src={post.image}
                alt={`Preview ${post.title}`}
                loading="lazy"
                
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-80 md:h-72 lg:h-80 flex items-center justify-center bg-gray-100 text-gray-600">
              Gambar Preview belum tersedia
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg md:text-xl font-semibold mb-1 line-clamp-2 text-black">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 break-all mb-3">
            {post.link || "—"}
          </p>

          <div className="flex gap-3 items-center">
            
            <button
              type="button"
              className="inline-block px-3 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-300"
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
