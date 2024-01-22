import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div className="border-solid border-0 border-b border-accent-2 mt-8">
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 italic">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-8">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
