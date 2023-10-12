import backgroundCoverStyles from "./background-cover.module.scss";
import LineWebIcon from "@/components/background-cover/icons/line-web-icon";
import FlairTopIcon from "@/components/background-cover/icons/flair-top.icon";
import FlairBottomIcon
  from "@/components/background-cover/icons/flair-bottom.icon";

export const BackgroundCover = () => {
  return (
    <div className={backgroundCoverStyles.background__cover}>
      <LineWebIcon className={backgroundCoverStyles.line__web} />
      <FlairTopIcon className={backgroundCoverStyles.flair__top} />
      <FlairBottomIcon className={backgroundCoverStyles.flair__bottom} />
    </div>
  );
};
