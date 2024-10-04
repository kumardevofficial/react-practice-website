import { Outlet } from "react-router-dom";
import "../ComponentCss/App.css";
import MenuBar from "./MenuBar/MenuBar";
import HeroSection from "./HeroSection/HeroSection";
import ShowClothDisplay from "./ShowClothDisplay/ShowClothDisplay";
import DisplayAd from "./DisplayAd/DisplayAd";
import FeauredProducts from "./FeauredProducts/FeauredProducts";
import FeatureProductList from "./FeauredProducts/FeatureProductList";
import QuickView from "./QuickView/QuickView";
import WatchVideo from "./watchVideo/WatchVideo";
import AnotherDisplayAd from "./AnotherDisplayAd/ADisplayAd";
import PrintedTshirt from "./printedTshirt/PrintedTshirt";
import MyFooter from "./Footer/MyFooter";

function App() {
  const headingCss = "text-2xl text-blue-700 bg-red-400 p-5 box-border";
  return (
    <>
      <MenuBar />
      <HeroSection />
      <ShowClothDisplay />
      <DisplayAd />
      <FeauredProducts />
      <FeatureProductList />
      {/* <QuickView /> */}
      <WatchVideo />
      <AnotherDisplayAd />
      <PrintedTshirt />
      <MyFooter />
    </>
  );
}

export default App;
