"use client";
import Link from "next/link"
import { notFound, useParams } from "next/navigation"

// Mock data - in a real app, this would come from a CMS or API
const articles = {
  "best-time-to-visit-japan": {
    title: "When Is The Best Time of Year To Visit Japan?",
    author: "Jessica Rosario",
    content: `
      <p>Japan is a country of four distinct seasons, each offering unique experiences for travelers. From cherry blossoms in spring to vibrant autumn foliage, the best time to visit depends on what you want to see and do.</p>
      <p>Spring (March to May) is perhaps the most popular time to visit Japan, thanks to the iconic cherry blossoms that sweep the country from south to north. The exact timing varies each year, but late March to early April is generally peak season in major cities like Tokyo and Kyoto.</p>
      <p>Summer (June to August) brings hot and humid weather, along with colorful festivals and fireworks displays. This is also the time for hiking in the Japanese Alps and enjoying the beaches of Okinawa.</p>
      <h2>Japanese Seasons and The Basics</h2>
      <p>Autumn (September to November) is another beautiful season, with comfortable temperatures and stunning fall foliage. The changing leaves create a spectacular display of reds, oranges, and yellows across the country.</p>
      <p>Winter (December to February) offers excellent skiing and snowboarding in resorts like Niseko and Hakuba. It's also a great time to experience Japanese hot springs (onsen) and see snow-covered temples and landscapes.</p>
    `,
    relatedArticles: ["japan-trip-covid", "japanese-city-guide-coastal-hotels"],
  },
  "japanese-city-guide-coastal-hotels": {
    title: "Japanese City Guide: Exploring Coastal Hotels",
    author: "Jessica Rosario",
    content: `
      <p>Japan's coastline stretches over 29,000 kilometers, offering a diverse range of accommodations with stunning ocean views. From luxury resorts to traditional ryokans, coastal hotels in Japan provide unique experiences that blend Japanese hospitality with maritime beauty.</p>
      <p>In Okinawa, you'll find world-class beach resorts with white sand beaches and crystal-clear waters. The subtropical climate makes it an ideal destination year-round, with many hotels offering water activities and marine adventures.</p>
      <p>Along the Izu Peninsula, ryokans with private onsen baths overlooking the Pacific Ocean offer a more traditional experience. These hot spring inns combine centuries-old Japanese customs with breathtaking coastal scenery.</p>
    `,
    relatedArticles: ["best-time-to-visit-japan", "airbnb-foreign-language"],
  },
  "japan-trip-covid": {
    title: "Planning a Trip to Japan in the Time of Covid",
    author: "Jessica Rosario",
    content: `
      <p>As Japan reopens to international travelers, planning a trip requires additional preparation and awareness of current regulations. Here's what you need to know before visiting Japan during the pandemic.</p>
      <p>Entry requirements have evolved throughout the pandemic, with Japan implementing various levels of restrictions. Currently, visitors may need to show proof of vaccination, negative COVID tests, and complete online health forms before arrival.</p>
      <p>Once in Japan, you'll find that mask-wearing is still common practice, even outdoors. Many establishments conduct temperature checks and provide hand sanitizer at entrances. Public transportation continues to operate normally, though with increased ventilation and sanitization.</p>
    `,
    relatedArticles: ["best-time-to-visit-japan", "airbnb-foreign-language"],
  },
  "airbnb-foreign-language": {
    title: "How to Choose an Airbnb When I Don't Speak the Local Language",
    author: "Jessica Rosario",
    content: `
      <p>Booking accommodations in a country where you don't speak the language can be challenging, but with the right approach, it can be a smooth experience. Here are some strategies to help you select the perfect Airbnb despite language barriers.</p>
      <p>First, look for listings with the "Instant Book" option, which eliminates the need for back-and-forth communication before securing your reservation. Also prioritize "Superhosts" who typically have experience with international guests and may be more likely to communicate in English.</p>
      <p>Use translation tools like Google Translate to understand listing details and communicate with hosts. The Airbnb app itself has built-in translation features that can help bridge the language gap.</p>
    `,
    relatedArticles: ["japan-trip-covid", "japanese-city-guide-coastal-hotels"],
  },
}

export default function ArticlePage() {
  const params = useParams<{ slug : string }>()
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-medium mb-4">{article.title}</h1>

        <div className="mb-8">
          <p className="text-sm">My name is {article.author}</p>
        </div>

        <div className="flex space-x-2 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-6 h-6 bg-black"></div>
          ))}
        </div>

        <div className="relative aspect-video bg-[#dce4e7] mb-8 flex items-center justify-center">
          <span className="text-[#949799]">Image</span>
        </div>

        <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: article.content }} />

        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-sm uppercase tracking-wider mb-6">Something Articles Read</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {article.relatedArticles.map((slug) => {
                const related = articles[slug as keyof typeof articles]
                return (
                  <div key={slug} className="flex flex-col">
                    <div className="relative aspect-video bg-[#dce4e7] mb-4 flex items-center justify-center">
                      <span className="text-[#949799]">Image</span>
                    </div>
                    <h3 className="text-base font-medium mb-4">{related.title}</h3>
                    <Link href={`/articles/${slug}`}>
                      <button className="bg-black text-white text-xs px-4 py-2">Read More</button>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
