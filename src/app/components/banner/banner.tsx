import { FC } from "react";
import { Button } from "@/components/ui/button";

const Banner: FC = () => {
  return (
    <section className="flex items-center justify-center flex-col text-center mx-auto mb-16 md:mb-24 lg:mb-32">
      <h1 className="leading-[1.2] text-4xl md:text-5xl lg:text-7xl mb-4 lg:mx-24">
        Hello 👋, we are Porto, exploring fashion, lifestyle and health.
      </h1>
      <p className="mx-auto text-lg md:text-xl leading-[1.6] md:mt-6 mb-8 max-w-content">
        Introducing a modern and sleek theme for Ghost. Perfect for
        <strong> magazine, newsletter, professional and personal blog </strong>
        publishing.
      </p>
      <Button size="lg" variant="primary">
        Join now - it`s free!
      </Button>
    </section>
  );
};

export default Banner;
