import FooterFirstRow from "./FooterFirstRow";
import FooterSecondRow from "./FooterSecondRow";

const MyFooter = () => {
  return (
    <>
      <div className="w-full h-[300px] bg-yellow-50 mt-20">
        <FooterFirstRow />
        <FooterSecondRow />
      </div>
    </>
  );
};

export default MyFooter;
