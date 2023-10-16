import PostCard from "@/components/post-card/post-card";
import { featuredPosts } from "@/app/components/featured-post/constants";
import Image from "next/image";
import { FeaturedPostType } from "@/types/post.type";
import PostCardTag from "@/components/post-card/atoms/post-card-tag";
import Link from "next/link";

const FeaturedPostType = () => {
  const mainFeaturedPostType = featuredPosts.find((post) => post?.isMain) as
    | FeaturedPostType
    | undefined;
  const otherFeaturedPostTypes = featuredPosts.filter((post) => !post?.isMain);

  return (
    <section className="md:mb-36">
      <h2 className="section-title text-center">Featured posts</h2>
      <div className="flex gap-8">
        <div className="lg:flex-[0.55]">
          {mainFeaturedPostType && <PostCard data={mainFeaturedPostType} />}
        </div>
        <div className="lg:flex-[0.45] flex flex-col gap-3 h-full overflow-y-auto">
          {otherFeaturedPostTypes.length > 0 &&
            otherFeaturedPostTypes.map((post) => (
              <article
                key={post.id}
                className="p-6 rounded-lg border border-solid border-border-color bg-card-background-color flex gap-4"
              >
                <Link href="/" className="relative aspect-[5/4] flex-[0.35]">
                  <Image
                    className="object-cover rounded-lg"
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
                    <p className="text-xl font-bold">{post.title}</p>
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostType;
