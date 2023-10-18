import PostCard from "@/components/post-card/post-card";
import { featuredPosts } from "@/app/components/featured-post/constants";
import { FeaturedPost } from "@/types/post.type";
import PostCardTag from "@/components/post-card/atoms/post-card-tag";
import Link from "next/link";
import Image from "next/image";

const FeaturedPost = () => {
  const mainFeaturedPost = featuredPosts.find((post) => post?.isMain) as
    | FeaturedPost
    | undefined;
  const otherFeaturedPosts = featuredPosts.filter((post) => !post?.isMain);

  return (
    <section className="md:mb-36">
      <h2 className="section-title">Featured posts</h2>
      <div className="flex flex-wrap   gap-8">
        <div className="flex-grow md:flex-[0.5] lg:flex-[0.55]">
          {mainFeaturedPost && <PostCard data={mainFeaturedPost} />}
        </div>
        <div className="flex-grow max-md:overflow-x-auto md:flex-[0.5] lg:flex-[0.45] flex md:flex-col gap-3 h-full overflow-y-auto">
          {otherFeaturedPosts.length > 0 &&
            otherFeaturedPosts.map((post) => (
              <article
                key={post.id}
                className="p-6 rounded-lg shrink-0 border border-solid border-border-color bg-card-background-color flex gap-4"
              >
                <Link
                  href="/"
                  className="relative flex-[0.35] aspect-[5/4] h-full"
                >
                  <Image
                    className="object-cover rounded-lg aspect-[5/4] h-full"
                    src={post.imagePath}
                    alt={post.title}
                    fill
                  />
                </Link>
                <div className="flex-[0.65]">
                  <Link href="/">
                    <PostCardTag label={post.tag} />
                  </Link>
                  <Link href="/">
                    <p className="font-bold">{post.title}</p>
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
