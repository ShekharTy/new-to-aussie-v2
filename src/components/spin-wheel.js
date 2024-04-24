import spinWheelData from "../data/spin_wheel_data";
import { useState } from "react";
import "../styles/spin-wheel.css";

function createCasinoColorGenerator() {
  const casinoColors = [
      "#C8102E", // Vivid Red
      "#000000", // Black
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
  if (!cuisines.some((val) => current.Cuisine === val.cuisine)) {
    cuisines.push({
      cuisine: current.Cuisine,
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
      <h2 style={{
        marginBottom: 16
      }}>Spin Wheel</h2>
      <div className="spin-container">
        {initState ? (
          <div
            className="spin-button"
            onClick={() => {
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
                clipPath: "polygon(0 0, 19% 0, 100% 100%, 0 19%)",
              }}
            >
              <span>{cuisine.cuisine}</span>
            </div>
          ))}
        </div>
      </div>
      {!initState && (
        <>
          <h2>Current Cuisine: {cuisines[randIndex].cuisine}</h2>
          <button
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setShowList(!showList);
            }}
          >
            Show Restaurant
          </button>
        </>
      )}
      {(!initState && showList) && (
        <table border={1} style={{
          marginTop: "16px"
        }}>
          <thead>
            <tr>
            <td>Suburb</td>
            <td>Name</td>
            <td>Link</td>
            </tr>
          </thead>
          <tbody>
          {spinWheelData
            .filter((item) => item.Cuisine === cuisines[randIndex].cuisine)
            .map((cuisine) => {
              return (
                <tr key={`${cuisine["Block ID"]}-${cuisine["Property ID"]}-${cuisine["Trading name"]}`}>
                  <td>{cuisine.Suburb}</td>
                  <td>{cuisine["Trading name"]}</td>
                  <td>
                    <a href={cuisine["Google Search Link"]} target="_blank">
                        Link
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default SpinWheel;
