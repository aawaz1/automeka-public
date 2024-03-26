import { useMemo } from "react";

const SectionHomeCheckoutWishlist = ({ actionButtonText, propWidth }) => {
  const checkoutStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[53px] pr-[3px] pl-0 box-border max-w-full shrink-0 text-left text-base text-black font-poppins">
      <div className="flex-1 bg-whitesmoke flex flex-row items-start justify-center py-[25px] pr-5 pl-6 gap-[18px] shrink-0 [debug_commit:f6aba90] z-[2] mq450:flex-wrap mq450:justify-center">
        <div className="h-[78px] w-[1918px] relative bg-whitesmoke hidden max-w-full" />
        <div className="relative inline-block min-w-[48px] z-[3]">Home</div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-darkorange">
          <div className="relative inline-block min-w-[8px] z-[3]">/</div>
        </div>
        <div className="h-7 relative inline-block z-[3]" style={checkoutStyle}>
          <p className="m-0">{actionButtonText}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionHomeCheckoutWishlist;
