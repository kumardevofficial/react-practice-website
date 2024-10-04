const AnotherDisplayAd = () => {
  return (
    <>
      <div className="w-4/5 h-[400px]  m-auto mt-20 flex">
        <div className="w-1/2 h-full  flex flex-col justify-center gap-y-5 px-2">
          <div className="text-3xl font-bold">
            Hundreds of Ready Designs To Choose From
          </div>
          <div>
            Nam at congue diam etiam erat lectus, finibus eget commodo quis,
            congue diam etiam erat lectus.
          </div>
          <div className="border border-b-2 border-r-2 border-t-2 border-l-0 border-black w-40 py-1 px-3">
            EXPLORE DESIGNS
          </div>
        </div>
        <div className="w-1/2 h-full">
          <img
            src="https://images.pexels.com/photos/2228889/pexels-photo-2228889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="thecup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default AnotherDisplayAd;
