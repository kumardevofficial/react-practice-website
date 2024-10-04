const DisplayFirstRow = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] w-full h-4/5 flex gap-x-5 justify-center">
        <div className="h-full w-[400px] relative">
          <img
            src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2021/02/cotm-img-1-1.png"
            alt="girl faishon"
            className="absolute bottom-0 object-cover"
          />
        </div>
        <div className="h-full w-[400px] flex flex-col justify-center  gap-y-6">
          <div className="font-bold text-3xl">#ColorOfTheMonth</div>
          <div className="font-serif">
            Lorem ipsum dolor sit amet, consectetur adipicscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <div className="font-bold text-3xl">Just $35!!!</div>
        </div>
      </div>
    </>
  );
};

export default DisplayFirstRow;
