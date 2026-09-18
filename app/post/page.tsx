import PostCard from "../components/Post/PostCard";
import { iPostType } from "../Types/type";

const PostPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: iPostType[] = await data.json();

  return (
    <div>
      <h2 className="text-center text-3xl">Post Page</h2>
      <h2 className="text-center text-xl">Total Post {posts.length}</h2>
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
