import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className="max-w-2xl mt-10 mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg italic">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
};

export default PostHeader;
