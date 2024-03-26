const FrameComponent1 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[29px] box-border max-w-full shrink-0 text-left text-lg text-darkorange font-poppins">
      <div className="w-[1375px] flex flex-row items-end justify-between shrink-0 [debug_commit:f6aba90] mq900:flex-wrap mq900:justify-center">
        <div className="flex flex-row items-start justify-start gap-[48px] max-w-full mq900:flex-wrap mq900:gap-[48px_24px]">
          <button className="cursor-pointer [border:none] py-[22px] pr-[34px] pl-[38px] bg-darkorange w-[251px] flex flex-row items-start justify-start box-border z-[1]">
            <div className="h-[72px] w-[251px] relative bg-darkorange hidden z-[1]" />
            <div className="flex-1 relative text-lg font-medium font-poppins text-white text-left z-[2]">
              ALL CATEGORIES
            </div>
            <div className="h-7 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border ml-[-13px]">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 z-[3]"
                alt=""
                src="/keyboard-arrow-down-fill0-wght400-grad0-opsz24-2.svg"
              />
            </div>
          </button>
          <div className="flex flex-col items-start justify-start pt-[22px] pb-0 pr-[5px] pl-0">
            <div className="relative font-medium inline-block min-w-[55px] z-[1]">
              Home
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0 text-white">
            <div className="relative font-medium inline-block min-w-[82px] z-[2]">
              About Us
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3 text-base text-white">
          <div className="rounded-21xl bg-darkslategray flex flex-row items-start justify-start pt-[7px] pb-1.5 pr-3 pl-6 z-[1] border-[1px] border-solid border-darkorange">
            <div className="h-10 w-[190px] relative rounded-21xl bg-darkslategray box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative inline-block min-w-[32px] z-[2]">USD</div>
            <div className="flex flex-col items-start justify-start pt-[3px] pb-0 pr-[8.5px] pl-0">
              <div className="w-[31.5px] h-6 relative">
                <img
                  className="absolute top-[0px] left-[31.5px] w-0 h-6 object-contain z-[2]"
                  alt=""
                  src="/line-1.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden z-[2]"
                  loading="lazy"
                  alt=""
                  src="/keyboard-arrow-down-fill0-wght400-grad0-opsz24-2.svg"
                />
              </div>
            </div>
            <div className="relative inline-block min-w-[56px] z-[3]">
              English
            </div>
            <div className="h-[27px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/keyboard-arrow-down-fill0-wght400-grad0-opsz24-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
