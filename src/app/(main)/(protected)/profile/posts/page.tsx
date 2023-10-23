import { postService } from "@/services";
import postCardStyles from "@/components/post-card/post-card.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  const cookieStore = cookies();
  const posts = await postService.setCookies(cookieStore.getAll()).getAll();
  console.log(posts);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {posts?.map((post) => (
        <article className={postCardStyles.post__card} key={post.id}>
          <div className={postCardStyles.post__card__image__wrapper}>
            <Link href="/">
              <Image
                className={postCardStyles.post__card__image}
                src={post.thumbnail}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 750px"
              />
            </Link>
          </div>
          <div className={postCardStyles.post__card__body}>
            {/*<Link href="/">*/}
            {/*  <PostCardTag label={data.tag} />*/}
            {/*</Link>*/}
            <Link href="/">
              <h5>{post.title}</h5>
            </Link>
            <p className={postCardStyles.post__card__description}>
              {/*{post.description}*/}
            </p>
            <div className={postCardStyles.post__card__footer}>
              {/*<div className={postCardStyles.post__card__authors}>*/}
              {/*  {data.authors.map((author) => (*/}
              {/*    <Link*/}
              {/*      className={postCardStyles.post__card__author}*/}
              {/*      href={`/author/${author.slug}`}*/}
              {/*      key={author.slug}*/}
              {/*    >*/}
              {/*      <Image*/}
              {/*        src={author.imagePath}*/}
              {/*        alt={author.slug}*/}
              {/*        width={36}*/}
              {/*        height={36}*/}
              {/*      />*/}
              {/*    </Link>*/}
              {/*  ))}*/}
              {/*</div>*/}
              <div className={postCardStyles.post__card__read__time}>
                <FiClock />
                <span>5 min</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
