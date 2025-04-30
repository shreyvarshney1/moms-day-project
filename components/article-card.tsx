import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category?: string;
  featured?: boolean;
}

export default function ArticleCard({
  title,
  excerpt,
  slug,
  category,
  featured = false,
}: ArticleCardProps) {
  return (
    <article className={`flex flex-col ${featured ? "mb-12" : ""}`}>
      <Link href={`/articles/${slug}`} className="group">
        <div className="relative aspect-[4/3] bg-[#dce4e7] mb-4 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-[#949799]">
            Image
          </div>
        </div>

        {category && (
          <div className="mb-2">
            <span className="text-xs uppercase tracking-wider">{category}</span>
          </div>
        )}

        <h3
          className={`font-medium ${
            featured ? "text-xl mb-2" : "text-base mb-1"
          }`}
        >
          {title}
        </h3>

        {featured && <p className="text-sm text-[#949799] mb-4">{excerpt}</p>}

        <button className="bg-black text-white text-xs px-4 py-2 cursor-pointer">
          Read More
        </button>
      </Link>
    </article>
  );
}
