import ContentArea from "./ContentArea";
import HeroImageArea from "./HeroImageArea";

const HeroSection = () => {
  return (
    <>
      <div className="w-4/5 h-[570px] m-auto mt-5 flex ">
        <ContentArea />
        <HeroImageArea />
      </div>
    </>
  );
};

export default HeroSection;
