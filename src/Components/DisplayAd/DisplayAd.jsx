import DisplayFirstRow from "./DisplayFirstRow";
import DisplaySecondRow from "./DisplaySecondRow";

const DisplayAd = () => {
  return (
    <>
      <div className="w-full h-[500px] bg-yellow-200 mt-24">
        <DisplayFirstRow />
        <DisplaySecondRow />
      </div>
    </>
  );
};

export default DisplayAd;
