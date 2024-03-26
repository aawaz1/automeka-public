const GroupComponent = () => {
  return (
    <div className="self-stretch bg-darkorange flex flex-row items-start justify-between pt-[91px] px-[277px] pb-[83px] shrink-0 [debug_commit:f6aba90] text-left text-17xl text-white font-poppins mq900:pl-[69px] mq900:pr-[69px] mq900:box-border mq1300:pl-[138px] mq1300:pr-[138px] mq1300:box-border mq1650:flex-wrap mq1650:justify-center">
      <div className="h-[230px] w-[1920px] relative bg-darkorange hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
        <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq900:text-10xl mq450:text-3xl">
          Subscribe Our Newsletter
        </h1>
      </div>
      <div className="w-[615px] rounded bg-white box-border flex flex-row items-start justify-start py-0 pr-px pl-[11px] gap-[205px] max-w-full z-[1] text-center text-lg text-dimgray-200 border-[1.8px] border-solid border-white mq900:flex-wrap mq900:gap-[205px_102px] mq450:gap-[205px_51px]">
        <div className="self-stretch w-[615px] relative rounded bg-white box-border hidden max-w-full border-[1.8px] border-solid border-white" />
        <div className="w-[191px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border">
          <div className="self-stretch h-3.5 relative tracking-[-0.3px] flex items-center justify-center shrink-0 z-[2]">
            Enter Email Address
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-3.5 px-[58px] pb-[15px] bg-darkslategray flex-1 rounded-tl-none rounded-tr rounded-br rounded-bl-none flex flex-row items-start justify-start box-border min-w-[133px] z-[1] hover:bg-slategray">
          <div className="h-14 w-[204px] relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-darkslategray hidden" />
          <div className="flex-1 relative text-lg tracking-[-0.3px] font-medium font-poppins text-white text-center inline-block min-w-[88px] z-[2]">
            Subscribe
          </div>
        </button>
      </div>
    </div>
  );
};

export default GroupComponent;
