import { IoMdArrowDropdown } from "react-icons/io";

const MenuItems = () => {
  return (
    <>
      <ul className=" flex justify-evenly gap-x-4 font-extralight items-center cursor-pointer">
        <li>HOME</li>
        <li>ALL PRODUCTS</li>
        <li>TSHIRTS</li>
        <li> MUGS</li>
        <li>ABOUT HDX</li>
        <li className="relative group cursor-pointer ">
          CONTACT
          <IoMdArrowDropdown className="absolute top-2 right-[-20px] " />
          <div class="absolute left-0 hidden group-hover:block text-white  p-2 py-4 top-6 bg- w-52 h-44 ">
            <ul className="flex flex-col text-black w-full h-full p-3 rounded-md bg-gray-400">
              <li className="hover:bg-white text-[15px] border border-black border-solid rounded-sm mb-3 text-center rounded-md">
                My Account
              </li>
              <li className="hover:bg-white border border-black border-solid text-center rounded-md">
                Cart
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MenuItems;
