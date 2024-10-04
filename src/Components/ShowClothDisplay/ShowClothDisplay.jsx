const ShowClothDisplay = () => {
  return (
    <>
      <div className="w-4/5 sm:h-[500px] bg-[#F9F9F9] m-auto mt-24 sm:grid sm:grid-cols-4 sm:grid-rows-2 grid grid-cols-1 grid-rows-8">
        <div className="box flex items-center px-4">
          <div>Best quality printed tshirts and mugs for all your needs</div>
        </div>
        <div className="box">
          <img
            src="https://img.freepik.com/free-photo/fashion-portrait-gorgeous-woman-stylish-winter-fluffy-blue-coat-black-hat-posing-bright-grey-wall_273443-4080.jpg"
            alt="faishon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="box">
          <img
            src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-black-jacket-jeans-fashion-male-posing-studio-near-grey-wall_158538-24002.jpg"
            alt="faishonboy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="box bg-[#E2DBD1] flex flex-col justify-center gap-y-5 px-5">
          <div className="w-40 text-xl">Get Printed T-shirt @ $25!</div>
          <div className="border border-b-2 border-r-2 border-t-2 border-l-0 border-black w-36 py-1 px-3">
            VISIT STORE
          </div>
        </div>
        <div className="box flex flex-col justify-center gap-y-3 px-4 bg-[#F9F9F9]">
          <div className="w-40 text-xl">Get Printed Mug @ $15!</div>
          <div className="border border-b-2 border-r-2 border-t-2 border-l-0 border-black w-36 py-1 px-3">
            VISIT STORE
          </div>
        </div>
        <div className="box">
          <img
            src="https://img.pikbest.com/origin/10/52/49/46DpIkbEsTdru.jpg!w700wp"
            alt="girl faishon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="box">
          <img
            src="https://m.media-amazon.com/images/I/71WX3enXaML._AC_UF894,1000_QL80_.jpg"
            alt="mug image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="box flex justify-center items-center bg-[#F9F9F9]">
          <div className="flex flex-col items-center">
            <div className="border-2 border-solid border-black w-10 h-10 rounded-full flex justify-center items-center text-3xl">
              +
            </div>
            <h3>Get Your Own</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowClothDisplay;
