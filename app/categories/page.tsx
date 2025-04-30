"use client";

import { useState } from "react";
import { mothersDayTributes, Article } from "@/lib/data";
import ArticleCard from "@/components/article-card";
import HeroSection from "@/components/hero";

const uniqueCategories = Array.from(
  new Set(mothersDayTributes.map((article) => article.category))
).map((category) => ({
  name: category,
  slug: category.toLowerCase().replace(/\s+/g, "-"),
  count: mothersDayTributes.filter((article) => article.category === category)
    .length,
}));

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? mothersDayTributes.filter(
        (article) => article.category === selectedCategory
      )
    : mothersDayTributes;

  return (
    <>
      <HeroSection />
      <div className="container mx-auto w-3/4 bg-white mt-[50vh] p-12">
        <h1 className="text-2xl font-medium mb-8">Explore by Category</h1>

        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`border px-4 py-2 text-sm transition-colors ${
              selectedCategory === null
                ? "bg-black text-white border-black"
                : "border-[#dce4e7] hover:bg-gray-100"
            }`}
          >
            All ({mothersDayTributes.length})
          </button>
          {uniqueCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.name)}
              className={`border px-4 py-2 text-sm transition-colors ${
                selectedCategory === category.name
                  ? "bg-black text-white border-black"
                  : "border-[#dce4e7] hover:bg-gray-100"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-medium mb-6">
            {selectedCategory
              ? `Recent Articles in ${selectedCategory}`
              : "Recent Articles"}
          </h2>
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  readingTime={article.readingTime}
                  category={article.category}
                  imageUrl={article.image}
                  slug={article.slug}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No articles found in this category.</p>
          )}
        </div>
      </div>
    </>
  );
}
