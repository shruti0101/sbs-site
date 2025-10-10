import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <h2 className="text-center text-red-500 mt-10">Category not found</h2>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('/bg.webp')" }}
        className="w-full bg-cover bg-center h-[50vh]  md:h-[90vh] relative "
      >
   
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-cyan-600 bg-white p-2 text-2xl md:text-6xl font-bold z-10 ">
            {category.name}
          </h2>
        </div>
      </section>

      {/* Products Grid */}
      <div className="p-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="w-full h-75 relative rounded-md overflow-hidden">
                <Image
                  src={product.image[0]?.src || "/placeholder.png"}
                  alt={product.image[0]?.alt || product.name}
                  title={product.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h2 className="mt-3 font-semibold">{product.name}</h2>
              {product.price && (
                <p className="text-gray-500">{product.price}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
