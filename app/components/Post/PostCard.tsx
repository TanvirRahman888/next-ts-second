import { iPostType } from "@/app/Types/type";

const PostCard = ({post}:{post:iPostType}) => {
    return (
        <div className="border bg-gray-300 p-5 flex flex-col gap-5 rounded-3xl">
            <h2 className="text-xl">{post.title}</h2>
            <h2 className="text-xl flex-1 text-justify">{post.body}</h2>
            <h2 className="text-sm text-right">{post.id}</h2>
        </div>
    );
};

export default PostCard;