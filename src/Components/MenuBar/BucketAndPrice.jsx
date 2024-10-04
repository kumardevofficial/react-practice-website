import { IoIosBasket } from "react-icons/io";
const BucketAndPrice = () => {
  return (
    <>
      <div className="flex gap-x-2 ">
        <div className="text-red-600">$0.00</div>
        <div className="flex relative">
          <IoIosBasket className="text-red-600 text-xl" />{" "}
          <span className="absolute top-[-13px] right-[-13px] border border-solid border-red-500 rounded-full w-4 h-4 flex justify-center items-center box-border p-2 text-red-700 bg-red-300">
            0
          </span>
        </div>
      </div>
    </>
  );
};

export default BucketAndPrice;
