import { Icons } from "../images";

type CardProps = {
  title: string;
  currentTime: number;
  previousTime: number;
};

const Card = ({ title, currentTime, previousTime }: CardProps) => {
  return (
    <div className="flex flex-col justify-start">
      <div className="bg-primary-light-red-work rounded-xl  flex justify-end">
        <img className="w-2/4" src={Icons.IconWork} alt="Work" />
      </div>
      <div className="bg-neutral-dark-blue p-4 text-primary-white rounded-xl ">
        <div className="flex flex-row justify-between items-center">
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
