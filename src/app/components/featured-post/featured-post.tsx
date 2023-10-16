import PostCard from "@/components/post-card/post-card";
import { featuredPosts } from "@/app/components/featured-post/constants";

const FeaturedPost = () => {
  return (
    <section>
      <h2 className="section-title text-center">Featured posts</h2>
      <div className="flex">
        <div className="flex-[0.5]">
          <PostCard data={featuredPosts[0]} />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default FeaturedPost;
