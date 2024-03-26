import DataSorter from "./DataSorter";

const DataTransformer = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[11.300000000000011px] pr-5 pl-[23px] box-border max-w-full shrink-0 text-left text-lg text-black font-poppins">
      <div className="w-[1367px] flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90] max-w-full gap-[20px] mq1300:flex-wrap mq1300:justify-center">
        <div className="w-[479px] flex flex-row items-start justify-start py-0 pr-[151px] pl-0 box-border gap-[23.5px] max-w-full mq450:flex-wrap mq900:pr-[75px] mq900:box-border">
          <div className="h-[76px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/group-42769.svg"
            />
          </div>
          <img
            className="h-[123.7px] w-[109px] relative object-cover"
            loading="lazy"
            alt=""
            src="/81bqxodeql-11@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border min-w-[91px]">
            <div className="self-stretch h-[52.6px] flex flex-col items-start justify-start gap-[8.300000000000011px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                <div className="h-[23px] flex-1 relative font-medium inline-block">
                  <p className="m-0">5w30 united oil</p>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[3.2px] text-xs text-darkgray">
                <img
                  className="h-[21.1px] w-[104px] relative z-[1]"
                  alt=""
                  src="/group-427221.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                  <div className="h-[7.1px] relative font-medium inline-block shrink-0 min-w-[30px] z-[1]">
                    (4.7)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[323px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border max-w-full text-base">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative font-medium inline-block min-w-[70px]">
              {" "}
              1.600 KD
            </div>
            <div className="relative text-darkorange inline-block min-w-[97px]">
              {" "}
              out of stock
            </div>
          </div>
        </div>
        <DataSorter propPadding="26px 0px 0px" />
      </div>
    </div>
  );
};

export default DataTransformer;
