import Logo from "@/components/logo/logo";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border-color">
      <div className="g-container pt-16 pb-12">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="md:max-w-md">
              Porto is a modern classic blog theme for Ghost. Use this theme for
              company blog, magazine, niche or personal blog.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};
