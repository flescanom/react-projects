const Figura = () => {
  return (
    <div className="w-[60%] h-fit">
      <h2>Con Grid</h2>
      <div className="border-2 border-black">
        <div className="grid grid-cols-[3fr_1fr] grid-rows-[200px]">
          <div>
            <div className="grid grid-cols-3 grid-flow-row">
              <div className="bg-amber-300 text-center">1</div>
              <div className="bg-green-300 text-center">2</div>
              <div className="bg-red-300 text-center">3</div>
            </div>
            <div className="grid grid-cols-2 grid-flow-row">
              <div className="bg-blue-300 text-center">4</div>
              <div className="bg-emerald-300 text-center">5</div>
            </div>
            <div className="grid grid-cols-1 grid-flow-row">
              <div className="bg-violet-300 text-center">6</div>
            </div>
          </div>
          <div className="bg-black text-white text-center">7</div>
        </div>
      </div>
      {/* <h2>Con Flex</h2>
      <div className="flex items-stretch">
        <div className="flex flex-col">
          <div className="flex">
            <div className="bg-amber-300 text-center">1</div>
            <div className="bg-green-300 text-center">2</div>
            <div className="bg-red-300 text-center">3</div>
          </div>
          <div className="flex grow-1">
            <div className="bg-blue-300 text-center">4</div>
            <div className="bg-emerald-300 text-center">5</div>
          </div>
          <div className="bg-violet-300 text-center">6</div>
        </div>
        <div className="bg-black text-white text-center">7</div>
      </div> */}
    </div>
  );
};
export default Figura;
