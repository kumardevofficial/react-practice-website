const PrintedTshirt = () => {
  return (
    <>
      <div className="w-full h-[400px] bg-gray-500 mt-28 flex">
        <div className="w-1/2 h-full flex items-end bg-[#F5F5F5]">
          <div className="w-[95%] h-[93%] bg-[#3A3D45] flex flex-col justify-center pl-[80px] gap-y-4 box-border">
            <div className="text-2xl text-white font-bold">
              Printed Tshirt For $25!
            </div>
            <div className="text-white">
              Nam at congue diam. Etiam erat lectus, finibus eget commodo.
            </div>
            <div className="border border-b-2 border-r-2 border-t-2 border-l-0 border-white w-40 py-1 px-3 text-white">
              ORDER NOW
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full bg-[#F5F5F5] flex flex-col justify-center box-border pl-[20px] gap-y-4">
          <div className="text-2xl font-bold">Printed Mug For $15!</div>
          <div>
            Nam at congque diam. Etiam erat lectus, finibus eget commodo quis.
          </div>
          <div className="border border-b-2 border-r-2 border-t-2 border-l-0 border-black w-40 py-1 px-3 text-black">
            ORDER NOW
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintedTshirt;
