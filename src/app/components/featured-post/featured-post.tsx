import PostCard from "@/components/post-card/post-card";
import { featuredPosts } from "@/app/components/featured-post/constants";
import { FeaturedPostType } from "@/types/post.type";
import PostCardTag from "@/components/post-card/atoms/post-card-tag";
import Link from "next/link";
import Image from "next/image";

const FeaturedPostType = () => {
  const mainFeaturedPostType = featuredPosts.find((post) => post?.isMain) as
    | FeaturedPostType
    | undefined;
  const otherFeaturedPostTypes = featuredPosts.filter((post) => !post?.isMain);

  return (
    <section className="md:mb-36">
      <h2 className="section-title">Featured posts</h2>
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

export default FeaturedPostType;
