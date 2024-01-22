import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  if (!posts || posts.length === 0) {
    return (
      <section>
        <div className="max-w-2xl mx-auto flex items-center justify-center">
          <img
            src="/assets/images/dragon.svg"
            width="100%"
            className="opacity-5"
          />
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="max-w-2xl mx-auto">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
