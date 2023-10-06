import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bot">
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log("hmm, this is interesting");
    // const intId = setInterval(() => {
    // console.log("hello from interval");
    // }, 1000);
    // return () => {
    // clearInterval(intId);
    // };
    const someFunc = () => {
      // some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h1 className="biz">hello there</h1>;
};

export default CleanupFunction;
