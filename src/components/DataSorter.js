import { useMemo } from "react";

const DataSorter = ({ propPadding }) => {
  const dataSorterStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0"
      style={dataSorterStyle}
    >
      <button className="cursor-pointer [border:none] py-[9px] px-[21px] bg-orange-500 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-chocolate">
        <div className="h-[42px] w-[135px] relative rounded-md bg-orange-500 hidden" />
        <div className="w-[93px] relative text-base tracking-[-0.3px] font-medium font-poppins text-white text-center inline-block min-w-[93px] z-[1]">
          Add To Cart
        </div>
      </button>
    </div>
  );
};

export default DataSorter;
