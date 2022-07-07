import { Icons } from "../images";

type CardProps = {
  title: string;
  currentTime: number;
  previousTime: number;
};

const Card = ({ title, currentTime, previousTime }: CardProps) => {
  return (
    <div className="relative  flex h-max w-64 cursor-pointer flex-col justify-start">
      <div className="flex justify-end rounded-xl bg-primary-light-red-work">
        <img src={Icons.IconWork} alt="Work" />
      </div>
      <div className="absolute top-14 w-full rounded-xl bg-neutral-dark-blue p-4 text-primary-white hover:bg-neutral-desaturated-blue">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-lg">{title}</h3>
          <img src={Icons.IconEllipsis} alt="" />
        </div>
        <h1 className="text-5xl">{currentTime}hrs</h1>
        <h4 className="text-xs text-neutral-desaturated-blue/80">
          Last Week - {previousTime}hrs
        </h4>
      </div>
    </div>
  );
};

export default Card;
