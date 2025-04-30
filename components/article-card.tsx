import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

// Helper function to truncate text
const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

interface ArticleCardProps {
  title: string
  description: string
  readingTime: number
  category: string
  imageUrl: string
  slug: string
}

export default function ArticleCard({
  title,
  description,
  readingTime,
  category,
  imageUrl,
  slug,
}: ArticleCardProps) {
  const truncatedDescription = truncateText(description, 30);

  return (
    <Card className="overflow-hidden rounded-none border-0">
      <div className="flex flex-col md:flex-row">
        <div className="relative bg-gray-200 md:w-2/5">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className="flex flex-col justify-between p-6 md:w-3/5">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">#{category}</span>
              <span className="text-sm text-gray-500">{readingTime} minutes reading</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-gray-600">{truncatedDescription}</p>
          </div>
          <Link
            href={`/articles/${slug}`}
            className="bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Read more
          </Link>
        </CardContent>
      </div>
    </Card>
  );
}
