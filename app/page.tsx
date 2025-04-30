import ArticleCard from "@/components/article-card";
import { cormorant } from "@/components/fonts";
import { mothersDayTributes, Article } from "@/lib/data";

const featuredArticleData: Article | undefined = mothersDayTributes[0];
const recentArticlesData: Article[] = mothersDayTributes;

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 w-3/4">
      <section className="mb-16">
        <h2
          className={`text-2xl font-semibold mb-6 border-b pb-2 ${cormorant.className}`}
        >
          Recent Articles
        </h2>
        <div className="flex flex-col">
          {recentArticlesData.map((article) => (
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
      </section>
    </div>
  );
}
