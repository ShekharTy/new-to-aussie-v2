import spinWheelData from "../data/spin_wheel_data";
import { useState } from "react";
import "../styles/spin-wheel.css";

function createCasinoColorGenerator() {
  const casinoColors = [
      "#ff0f7b", // Vivid Red
      "#ff930f", // Black
      "#45caff",
      "red",
      "blue",
  ];
  let currentIndex = 0;

  return function() {
      const color = casinoColors[currentIndex];
      currentIndex = (currentIndex + 1) % casinoColors.length;
      return color;
  };
}

// Create the color generator
const getCasinoColor = createCasinoColorGenerator();

const cuisines = [];
spinWheelData.map((current) => {
  if (!cuisines.some((val) => current["Spin Cuisines"] === val.cuisine)) {
    cuisines.push({
      cuisine: current["Spin Cuisines"],
      color: getCasinoColor(),
    });
  }
});

const SpinWheel = () => {
  const [initState, setInitState] = useState(true);
  const [randIndex, setRandIndex] = useState(0);
  const [showList, setShowList] = useState(false);
  return (
    <>
      <h2 className="mt-3 text-center">Still haven't decided what to eat? Use the spinwheel to decide.</h2>
      <div className="spin-container">
        {initState ? (
          <div
            className="spin-button"
            onClick={() => {
              setTimeout(() => {
                setShowList(true);
              }, 3000);
              setInitState(false);
              setRandIndex(Math.floor(Math.random() * cuisines.length));
            }}
          >
            Spin
          </div>
        ) : (
          <div
            className="spin-button"
            onClick={() => {
              setInitState(true);
              setRandIndex(0);
              setShowList(false);
            }}
          >
            Reset
          </div>
        )}
        <div
          className="spin-wheel"
          style={{
            transform: initState
              ? "rotate(0deg)"
              : `rotate(-${720 + randIndex * (360 / cuisines.length)}deg)`,
            transition: !initState ? "transform 3s ease" : "none",
          }}
        >
          {cuisines.map((cuisine, index) => (
            <div
              key={cuisine.cuisine}
              className="option"
              style={{
                backgroundColor: cuisine.color,
                transform: `rotate(${(360 / cuisines.length) * index + 45}deg)`,
                clipPath: "polygon(0 0, 40% 0, 100% 100%, 0 40%)",
              }}
            >
              <span>{cuisine.cuisine}</span>
            </div>
          ))}
        </div>
      </div>
      {(!initState && showList) && (
          <>
          <h2 className="mx-3 mb-5 text-center">We Recommend: {cuisines[randIndex].cuisine}</h2>
          <div className="grid grid-cols-4 gap-4 animate__animated animate__fadeInUp m-3 mb-5">
          {spinWheelData
            .filter((item) => item["Spin Cuisines"] === cuisines[randIndex].cuisine)
            .map((cuisine) => {
              return (
                <div key={`${cuisine["Block ID"]}-${cuisine["Property ID"]}-${cuisine["Trading name"]}`} className="border p-4 bg-white rounded">
                  <h3 className="text-lg font-semibold">{cuisine["Trading name"]}</h3>
                  <p className="text-gray-600">{cuisine.Suburb}</p>
                  <a
                    href={cuisine["Google Search Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Google Link
                  </a>
                </div>
              );
            })}
          </div>
          </>
      )}
    </>
  );
};

export default SpinWheel;
