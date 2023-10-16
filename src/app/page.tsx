import Banner from "@/app/components/banner/banner";
import FeaturedPostType from "@/app/components/featured-post/featured-post";

export const metadata = {
  title: "Proto",
  description: "Proto - Blog By Habil",
};

export default function Home() {
  return (
    <main className="">
      <Banner />
      <FeaturedPostType />
    </main>
  );
}
