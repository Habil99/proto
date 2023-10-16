import { Button, TagCard } from "@/components";
import { popularTags } from "@/app/components/popular-tag/constants";
import popularTagStyles from "./popular-tag.module.scss";

const PopularTag = () => {
  return (
    <section className="my-16">
      <p className="section-title">Popular Tags</p>
      <div className={popularTagStyles.popular__tags}>
        {popularTags.map((tag) => (
          <TagCard data={tag} key={tag.id} />
        ))}
      </div>
      <div className="flex justify-center mt-4 w-full">
        <Button variant="primary">View All Tags</Button>
      </div>
    </section>
  );
};

export default PopularTag;
