"use client";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { mothersDayTributes } from "@/lib/data";
import HeroSection from "@/components/hero";

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = mothersDayTributes.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container">
      <HeroSection />
      <article className="mx-auto p-12 w-3/4 bg-white mt-[50vh]">
        <div className="mb-4 text-sm text-gray-500">
          <Link href={`/categories`} className="hover:underline">
            #{article.category}
          </Link>
          <span className="mx-2">•</span>
          <span>{article.readingTime} minutes reading</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>

        <div className="relative aspect-video bg-[#dce4e7] mb-8 overflow-hidden rounded-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="prose max-w-none mb-12">
          <p>{article.description}</p>
        </div>

        {/* Related Articles Section (Keep commented if not implemented)

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
        )} */}
      </article>
    </div>
  );
}
