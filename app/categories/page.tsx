import Link from "next/link"

const categories = [
  {
    name: "Guide to Local Cooking",
    description: "Discover authentic recipes and cooking techniques from around the world.",
    count: 12,
  },
  {
    name: "Trip to Japan",
    description: "Everything you need to know about planning a trip to Japan.",
    count: 8,
  },
  {
    name: "Choosing an Airbnb",
    description: "Tips and advice for finding the perfect Airbnb for your travels.",
    count: 5,
  },
  {
    name: "Local Food",
    description: "Explore the culinary delights of different regions and cultures.",
    count: 10,
  },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium mb-8">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="border border-[#dce4e7] p-6">
            <h2 className="text-lg font-medium mb-2">{category.name}</h2>
            <p className="text-sm text-[#949799] mb-4">{category.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs">{category.count} articles</span>
              <Link href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <button className="bg-black text-white text-xs px-4 py-2">View All</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-sm uppercase tracking-wider mb-6">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative aspect-square bg-[#dce4e7] flex items-center justify-center">
              <span className="text-[#949799]">Image</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
