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
    <div className="text-primary-white flex justify-center items-center">
      <div className="grid  grid-cols-2 gap-x-6">
        <div>
          <div>
            <div>
              <img src={Images.ImageJeremy} alt="" />
            </div>
          </div>
          <div className="bg-neutral-dark-blue">
            {buttonText.map((text, index) => {
              return <Button key={index} text={text} />;
            })}
          </div>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-6">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                currentTime={0}
                previousTime={0}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
