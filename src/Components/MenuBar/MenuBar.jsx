import BucketAndPrice from "./BucketAndPrice";
import HdxLogo from "./HdxLogo";
import MenuItems from "./MenuItems";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuBar = () => {
  return (
    <>
      <div className="hidden sm:flex justify-between items-baseline p-2 border-b border-solid border-gray-400 shadow-[0px_0px_5px_gray] box-border px-10">
        <HdxLogo />
        <div className="flex justify-evenly gap-x-14">
          <MenuItems />
          <BucketAndPrice />
        </div>
      </div>

      <div className="flex sm:hidden justify-between items-baseline p-2 border-b border-solid border-gray-400 shadow-[0px_0px_5px_gray] box-border px-10">
        <HdxLogo />
        <div className="flex-col gap-x-14">
          <GiHamburgerMenu className="text-3xl" />
        </div>
      </div>
    </>
  );
};

export default MenuBar;
