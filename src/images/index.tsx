import IconWork from "./icon-work.svg";
import IconStudy from "./icon-study.svg";
import IconSocial from "./icon-social.svg";
import IconSelfCare from "./icon-self-care.svg";
import IconPlay from "./icon-play.svg";
import IconExercise from "./icon-exercise.svg";
import IconEllipsis from "./icon-ellipsis.svg";

const Icons = {
  IconWork: IconWork,
  IconStudy: IconStudy,
  IconSocial: IconSocial,
  IconSelfCare: IconSelfCare,
  IconPlay: IconPlay,
  IconExercise: IconExercise,
  IconEllipsis: IconEllipsis,
};

type ImageProps = {
  ImageJeremy: string;
};

const Images: ImageProps = {
  ImageJeremy: require("./image-jeremy.png"),
};

// export both the images and the icons as a single object
export { Images, Icons };
