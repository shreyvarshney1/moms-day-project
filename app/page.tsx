import ArticleCard from "@/components/article-card"

const featuredArticle = {
  title: "When Is The Best Time of Year To Visit Japan?",
  excerpt:
    "Japan is a country of four distinct seasons, each offering unique experiences for travelers. From cherry blossoms in spring to vibrant autumn foliage, the best time to visit depends on what you want to see and do.",
  slug: "best-time-to-visit-japan",
}

const articles = [
  {
    title: "Japanese City Guide: Exploring Coastal Hotels",
    excerpt:
      "Discover the best coastal accommodations Japan has to offer, from luxury resorts to traditional ryokans with ocean views.",
    slug: "japanese-city-guide-coastal-hotels",
    category: "Travel",
  },
  {
    title: "Planning a Trip to Japan in the Time of Covid",
    excerpt:
      "Essential information for travelers planning to visit Japan during the pandemic, including entry requirements and safety measures.",
    slug: "japan-trip-covid",
    category: "Travel",
  },
  {
    title: "How to Choose an Airbnb When I Don't Speak the Local Language",
    excerpt:
      "Tips and strategies for booking accommodations in foreign countries when you don't speak the local language.",
    slug: "airbnb-foreign-language",
    category: "Travel",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square bg-[#dce4e7] flex items-center justify-center">
            <span className="text-[#949799]">Image</span>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-medium mb-4">When Is The Best Time of Year To Visit Japan?</h1>
            <div className="flex space-x-2 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 bg-black"></div>
              ))}
            </div>
            <button className="bg-black text-white text-xs px-4 py-2 self-start">Read More</button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-sm uppercase tracking-wider mb-6">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              slug={article.slug}
              category={article.category}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
