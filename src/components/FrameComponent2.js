import { useCallback } from "react";

const FrameComponent2 = () => {
  const onShoppingCartFILL0Wght400GRIconClick = useCallback(() => {
    // Please sync "cart empty" to the project
  }, []);

  return (
    <header className="self-stretch h-[90px] flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-center text-base text-dimgray-200 font-poppins">
      <div className="self-stretch w-[1371px] flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90]">
        <img
          className="h-[90px] w-[84px] relative object-cover"
          loading="lazy"
          alt=""
          src="/auto-meka-logo@2x.png"
        />
        <div className="w-[859px] flex flex-col items-start justify-start pt-3.5 pb-0 pr-2 pl-0 box-border max-w-full">
          <div className="self-stretch h-14 relative">
            <div className="absolute top-[0px] left-[0px] rounded bg-white box-border w-full h-full border-[1.8px] border-solid border-gainsboro">
              <div className="absolute top-[0px] left-[0px] rounded bg-white box-border w-full h-full hidden border-[1.8px] border-solid border-gainsboro" />
              <button className="cursor-pointer [border:none] p-0 bg-darkslategray absolute h-full top-[0px] bottom-[0px] left-[754px] rounded-tl-none rounded-tr rounded-br rounded-bl-none w-[97px] z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-darkslategray w-full h-full hidden" />
                <img
                  className="absolute top-[16px] left-[36px] w-[26px] h-[26px] overflow-hidden z-[2]"
                  alt=""
                  src="/search-fill0-wght400-grad0-opsz24-3-1.svg"
                />
              </button>
              <div className="absolute top-[21px] left-[21px] tracking-[-0.3px] flex items-center justify-center w-[191px] h-3.5 whitespace-nowrap z-[3]">
                Enter Part Details Here
              </div>
            </div>
          </div>
        </div>
        <div className="w-[134px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
          <div className="self-stretch h-[26px] flex flex-row items-start justify-between gap-[20px]">
            <img
              className="h-[26px] w-[26px] relative overflow-hidden shrink-0 min-h-[26px]"
              loading="lazy"
              alt=""
              src="/person-fill0-wght400-grad0-opsz24-3-1.svg"
            />
            <img
              className="h-[26px] w-[26px] relative overflow-hidden shrink-0 min-h-[26px]"
              loading="lazy"
              alt=""
              src="/favorite-fill0-wght400-grad0-opsz24-4-1.svg"
            />
            <img
              className="h-[26px] w-[26px] relative overflow-hidden shrink-0 min-h-[26px] cursor-pointer"
              loading="lazy"
              alt=""
              src="/shopping-cart-fill0-wght400-grad0-opsz24-3-1.svg"
              onClick={onShoppingCartFILL0Wght400GRIconClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
