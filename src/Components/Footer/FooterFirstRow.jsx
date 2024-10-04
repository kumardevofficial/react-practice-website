import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterFirstRow = () => {
  return (
    <>
      <div className="w-full h-2/3 flex justify-around items-center bg-[#415161] text-white">
        <div className="flex gap-x-10">
          <div>
            <ul>
              <li>Home</li>
              <li>About HDX</li>
              <li>My account</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Tshirts</li>
              <li>Mugs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-x-3 text-2xl">
          <IoLogoFacebook />
          <FaTwitter />
          <FaInstagramSquare />
          <FaGoogle />
          <FaYoutube />
        </div>
      </div>
    </>
  );
};

export default FooterFirstRow;
