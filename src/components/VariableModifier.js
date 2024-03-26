import DataSorter from "./DataSorter";

const VariableModifier = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[9.5px] pr-5 pl-[23px] box-border max-w-full shrink-0 text-left text-lg text-black font-poppins">
      <div className="w-[1367px] flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90] max-w-full gap-[20px] mq1300:flex-wrap mq1300:justify-center">
        <div className="flex flex-row items-start justify-start py-0 pr-[147px] pl-[72px] box-border relative gap-[34px] max-w-full mq900:flex-wrap mq900:gap-[34px_17px] mq900:pl-9 mq900:pr-[73px] mq900:box-border">
          <img
            className="h-8 w-8 absolute !m-[0] top-[calc(50%_-_16px)] left-[0px]"
            loading="lazy"
            alt=""
            src="/group-42768.svg"
          />
          <img
            className="h-[108px] w-20 relative object-cover mq900:flex-1"
            loading="lazy"
            alt=""
            src="/8271b947c3c64cbc838dd8f563c70e1fremovebgpreview-21@2x.png"
          />
          <div className="h-[67.1px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                <div className="relative font-medium">10w40 United Oil</div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[7px] text-xs text-darkgray">
                <img
                  className="h-[21.1px] w-[104px] relative"
                  loading="lazy"
                  alt=""
                  src="/group-427221.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                  <div className="h-[7.1px] relative font-medium inline-block shrink-0 min-w-[30px]">
                    (4.7)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[327px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-full text-base">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative font-medium inline-block min-w-[74px]">
              {" "}
              3.500 KD
            </div>
            <div className="relative text-darkorange inline-block min-w-[97px]">
              {" "}
              out of stock
            </div>
          </div>
        </div>
        <DataSorter />
      </div>
    </div>
  );
};

export default VariableModifier;
