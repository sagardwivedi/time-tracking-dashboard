import Card from "./components/Card";
import data from "./data.json";
import { Images } from "./images";

const buttonText = ["Daily", "Weeky", "Monthly"];

// create a button and show three different text
const Button = ({ text }: { text: string }) => {
  return (
    <>
      <h2 className="text-neutral-desaturated-blue">{text}</h2>
    </>
  );
};

const App = () => {
  return (
    <div className="flex items-center justify-center text-primary-white">
      <div className="flex flex-row gap-x-6">
        <div>
          <div>
            <div>
              <img src={Images.ImageJeremy} alt="" />
            </div>
            <h4 className="font-light">Report for</h4>
            <h1 className="font-light">Jeremy Robson</h1>
          </div>
          <div className="bg-neutral-dark-blue">
            {buttonText.map((text, index) => {
              return <Button key={index} text={text} />;
            })}
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-8 gap-y-28">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                currentTime={item.timeframes.weekly.current}
                previousTime={item.timeframes.weekly.previous}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
