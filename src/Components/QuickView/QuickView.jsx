import { useState } from "react";

const QuickView = () => {
  // Initial class state
  const [myNewClass, setMyNewClass] = useState(
    "filter brightness-75 contrast-125 blur-sm w-full h-full bg-yellow-300 fixed top-0 left-0 flex justify-center items-center"
  );

  // Function to update class and hide the element
  const hideMe = () => {
    setMyNewClass(
      "filter brightness-75 contrast-125 blur-sm w-full h-full bg-yellow-300 fixed top-0 left-0 flex justify-center items-center hidden"
    );
  };

  return (
    <>
      <div className={myNewClass}>
        <div className="w-4/5 h-[500px] bg-slate-500" onClick={hideMe}></div>
      </div>
    </>
  );
};

export default QuickView;
