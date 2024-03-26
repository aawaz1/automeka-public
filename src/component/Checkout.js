

const Checkout = () => {
  return (
    <>
    <div className="  grid grid-cols-1 md:grid-cols-2 p-4 gap-3">
       <div> 
        <div className="flex flex-col items-start justify-between  mq900:flex-wrap">
                  <h3 className="m-0 relative text-inherit
                    font-  md:font-medium font-inherit mq450:text-lgi">
                    Contact Information
                  </h3>
                  <div className="flex flex-col items-start justify-start pb-0 text-mini text-gray-100">
                    <div className="relative">
                      <span>Already have an account?</span>
                      <span className="text-darkorange"> Log in</span>
                    </div>
                  </div>
                  <div className="self-stretch rounded bg-white box-border flex flex-row items-start justify-start py-[18px] px-5 max-w-full border-[0.9px] border-solid border-silver-100">
                  <div className="h-[50px] w-[668px] relative rounded bg-white box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
                  <input
                    className="w-[210px] [border:none] [outline:none] font-poppins text-sm bg-[transparent] h-3.5 relative tracking-[-0.3px] text-dimgray-200 text-center flex items-center justify-center p-0 z-[1]"
                    placeholder="Email or mobile phone number"
                    type="text"
                  />
                </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[24.100000000000023px] box-border gap-[24px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[97px] mq450:text-lgi">
                    Delivery
                  </h3>
                  <div className="self-stretch rounded bg-white box-border flex flex-row items-start justify-between pt-[9px] pb-[7px] pr-[21px] pl-[19px] max-w-full gap-[20px] text-center text-smi text-dimgray-200 border-[0.9px] border-solid border-silver-100">
                    <div className="h-[50px] w-[668px] relative rounded bg-white box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
                    <div className="w-[100px] flex flex-col items-start justify-start">
                      <div className="self-stretch h-3.5 relative tracking-[-0.3px] flex items-center justify-center shrink-0 min-w-[100px] z-[1]">
                        Country/Region
                      </div>
                      <div className="w-8 relative tracking-[-0.3px] text-gray-300 inline-block min-w-[32px] z-[2]">
                        India
                      </div>
                    </div>
                    <div className="h-7 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/expand-more-fill0-wght400-grad0-opsz24-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq900:flex-wrap">
                  <div className="flex-1 rounded bg-white box-border flex flex-row items-start justify-start pt-[15px] px-5 pb-3.5 min-w-[211px] max-w-full border-[0.9px] border-solid border-silver-100">
                    <div className="h-[50px] w-[324px] relative rounded bg-white box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
                    <input
                      className="w-[71px] [border:none] [outline:none] font-poppins text-sm bg-[transparent] h-[21px] relative tracking-[-0.3px] text-dimgray-200 text-center flex items-center justify-center p-0 z-[1]"
                      placeholder="First name"
                      type="text"
                    />
                  </div>
                  <div className="flex-1 rounded bg-white box-border flex flex-row items-start justify-start pt-[15px] px-5 pb-3.5 min-w-[211px] max-w-full border-[0.9px] border-solid border-silver-100">
                    <div className="h-[50px] w-[324px] relative rounded bg-white box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
                    <input
                      className="w-[71px] [border:none] [outline:none] font-poppins text-sm bg-[transparent] h-[21px] relative tracking-[-0.3px] text-dimgray-200 text-center flex items-center justify-center p-0 z-[1]"
                      placeholder="Last name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded bg-white box-border flex flex-row items-start justify-start py-[18px] px-5 max-w-full border-[0.9px] border-solid border-silver-100">
                  <div className="h-[50px] w-[668px] relative rounded bg-white box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
                  <input
                    className="w-[62px] [border:none] [outline:none] font-poppins text-sm bg-[transparent] h-3.5 relative tracking-[-0.3px] text-dimgray-200 text-center flex items-center justify-center p-0 z-[1]"
                    placeholder="Address"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-center text-sm">
                  <div className="w-[103px] relative tracking-[-0.3px] whitespace-pre-wrap inline-block min-w-[103px]">
                    + Add address
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center gap-[21px] max-w-full text-smi text-dimgray-200 mq900:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[23.899999999999977px] min-w-[285px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
                        <div className="flex-1 rounded bg-white box-border flex flex-row items-start justify-start pt-[15px] px-5 pb-3.5 min-w-[136px] border-[0px] border-solid border-silver-100">
                          <img
                            className="h-[50px] w-[209px] relative rounded hidden"
                            alt=""
                            src="/rectangle-3.svg"
                          />
                          <input
                            className="w-8 [border:none] [outline:none] font-poppins text-sm bg-[transparent] h-[21px] relative tracking-[-0.3px] text-dimgray-200 text-center flex items-center justify-center p-0 z-[1]"
                            placeholder="City"
                            type="text"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-5 pb-[7px] box-border relative min-w-[136px]">
                          <img
                            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                            loading="lazy"
                            alt=""
                            src="/rectangle-3.svg"
                          />
                          <div className="w-[33px] relative tracking-[-0.3px] inline-block min-w-[33px] z-[1]">
                            State
                          </div>
                          <div className="h-[17px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-gray-300">
                            <div className="mt-[-3px] w-[82px] relative tracking-[-0.3px] inline-block min-w-[82px] z-[2]">
                              Maharashtra
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[266.9px] flex flex-row items-center justify-start gap-[13.899999999999636px] text-sm text-gray-400">
                        <input
                          className="m-0 h-4 w-4 relative rounded-[3px] box-border border-[0.9px] border-solid border-silver-100"
                          type="checkbox"
                        />
                        <div className="flex-1 relative tracking-[-0.3px]">
                          Save this information for next time
                        </div>
                      </div>
                    </div>
                    <div className="w-[209px] rounded bg-white flex flex-row items-start justify-start text-sm">
                      <img
                        className="h-[50px] w-[209px] relative rounded hidden min-h-[50px]"
                        alt=""
                        src="/rectangle-3.svg"
                      />
                      <div className="flex-1 rounded bg-white flex flex-row items-start justify-start pt-[15px] px-5 pb-3.5 z-[2] border-[0px] border-solid border-silver-100">
                        <div className="w-[72px] relative tracking-[-0.3px] hidden items-center justify-center shrink-0 min-w-[72px]">
                          First name
                        </div>
                        <img
                          className="h-[50px] w-[209px] relative rounded hidden"
                          alt=""
                          src="/rectangle-3.svg"
                        />
                        <input
                          className="w-[59px] [border:none] [outline:none] font-poppins text-sm bg-[transparent] h-[21px] relative tracking-[-0.3px] text-dimgray-200 text-center flex items-center justify-center p-0 z-[1]"
                          placeholder="PIN code"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[517px] flex flex-col items-start justify-start gap-[10px] max-w-full">
                <div className="flex flex-col items-start justify-start gap-[3px]">
                  <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[109px] mq450:text-lgi">
                    Payment
                  </h3>
                  <div className="h-9 relative text-sm text-gray-400 inline-block shrink-0">
                    <p className="m-0">
                      All transactions are secure and encrypted.
                    </p>
                  </div>
                </div>
                <div style={{border : " ", height : "1.8rem" }} className="self-stretch flex-1 rounded-md bg-whitesmoke box-border flex flex-row items-start justify-start pt-0 px-0 pb-[375px] max-w-full text-center text-sm border-[0.9px] border-solid border-silver-100 mq450:pb-[244px] mq450:box-border">
                  <div className="h-[420px] w-[668px] relative rounded-md bg-whitesmoke box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
                  <div className="self-stretch flex-1 rounded-t-md rounded-b-none bg-whitesmoke box-border flex flex-row items-start justify-between pt-[17px] pb-4 pr-[22px] pl-5 max-w-full gap-[20px] z-[1] border-[0.8px] border-solid border-black">
                    <div className="h-[57px] w-[668px] relative rounded-t-md rounded-b-none bg-whitesmoke box-border hidden max-w-full border-[0.8px] border-solid border-black" />
                    <div className="self-stretch w-[126px] flex flex-row items-start justify-start gap-[21px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 z-[2]"
                        alt=""
                        src="/radio-button-checked-fill1-wght400-grad0-opsz24-1.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <div className="self-stretch h-4 relative tracking-[-0.3px] leading-[20.8px] flex items-center justify-center shrink-0 min-w-[81px] z-[2]">
                          Net Banking
                        </div>
                        
                      </div>
                      
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]"
                      alt=""
                      src="/keyboard-arrow-down-fill0-wght400-grad0-opsz24-2-1.svg"
                    />
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[22px] px-5 pb-[19px] bg-orange-500 w-[774px] mt-2 rounded-md flex flex-row items-start justify-center box-border max-w-full hover:bg-chocolate">
            <div className="h-[55px] w-[668px] relative rounded-8xs bg-darkorange hidden max-w-full" />
            <div className="h-3.5 w-[103px] relative text-xl tracking-[-0.3px] font-medium font-poppins text-white text-center flex items-center justify-center shrink-0 z-[1] mq450:text-base">
              Pay Now
            </div>
          </button>
                </div>

       
                
               
                <div className="  flex flex-wrap flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[648px] max-w-full mq900:min-w-full mq1300:flex-1">
              <div className=" w-[400px] md:w-[648px] self-stretch rounded-md bg-whitesmoke box-border flex flex-col items-start justify-start pt-[39px] pb-[291px] pr-8 pl-[52px] gap-[45px] max-w-full border-[0.9px] border-solid border-silver-100 mq900:gap-[22px_45px] mq900:pl-[26px] mq900:pt-[25px] mq900:pb-[189px] mq900:box-border mq450:pt-5 mq450:pb-[123px] mq450:box-border">
                <div className="w-[648px] h-[791px] relative rounded-md bg-whitesmoke box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
                <div className="w-[543px] flex flex-row items-start justify-center max-w-full">
                  <h3 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-lgi">
                    Your Order Summary
                  </h3>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[19.666666666666668px] max-w-full text-base">
                  <div className="self-stretch w-450px md:600px flex flex-col items-start justify-start gap-[14px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[3px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
                        <div className="h-[95px] w-[266px] flex flex-row items-start justify-start gap-[21px]">
                          <button className="cursor-pointer pt-[9px] pb-1.5 pr-[21px] pl-[22px] bg-white self-stretch w-[104px] rounded box-border flex flex-row items-start justify-start z-[1] border-[0.9px] border-solid border-silver-100">
                            <div className="h-[95px] w-[104px] relative rounded bg-white box-border hidden border-[0.9px] border-solid border-silver-100" />
                            <img
                              className="h-20 flex-1 relative max-w-full overflow-hidden object-contain z-[2]"
                              alt=""
                              src="/8271b947c3c64cbc838dd8f563c70e1fremovebgpreview-2@2x.png"
                            />
                          </button>
                          <div className="h-[60px] flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[7px]">
                              <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-1">
                                <div className="relative font-medium z-[1]">
                                  10w40 United Oil
                                </div>
                              </div>
                              <div className="flex-1 flex flex-row items-start justify-start gap-[7px] text-xs text-darkgray">
                                <img
                                  className="h-[21px] w-[104px] relative z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/group-42722.svg"
                                />
                                <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                                  <div className="h-[7px] relative font-medium inline-block shrink-0 min-w-[30px] z-[1]">
                                    (4.7)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-mini text-dimgray-100">
                          <div className="relative font-medium inline-block min-w-[114px] z-[1]">
                            Price : 3.500 KD
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[0.5px] relative box-border z-[1] border-t-[0.5px] border-solid border-silver-200" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
                    <div className="w-[551px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
                        <div className="h-[95px] w-[267px] flex flex-row items-start justify-start gap-[21px]">
                          <button className="cursor-pointer pt-1 pb-[8.400000000000006px] pr-[15px] pl-4 bg-white self-stretch w-[104px] rounded box-border flex flex-row items-start justify-start z-[1] border-[0.9px] border-solid border-silver-100">
                            <div className="h-[95px] w-[104px] relative rounded bg-white box-border hidden border-[0.9px] border-solid border-silver-100" />
                            <img
                              className="h-[82.6px] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
                              alt=""
                              src="/81bqxodeql-1@2x.png"
                            />
                          </button>
                          <div className="h-[63px] flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1">
                                <div className="flex-1 relative font-medium z-[1]">
                                  <p className="m-0">5w30 united oil</p>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-row items-start justify-start gap-[7px] text-xs text-darkgray">
                                <img
                                  className="h-[21px] w-[104px] relative z-[1]"
                                  alt=""
                                  src="/group-42722.svg"
                                />
                                <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                                  <div className="h-[7px] relative font-medium inline-block shrink-0 min-w-[30px] z-[1]">
                                    (4.7)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0 text-mini text-dimgray-100">
                          <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                            Price : 1.600 KD
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[0.5px] relative box-border z-[1] border-t-[0.5px] border-solid border-silver-200" />
                  </div>
                  <div className="w-[551px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-gray-300">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                      <div className="w-[138px] flex flex-col items-start justify-start gap-[6px]">
                        <div className="self-stretch relative font-medium z-[1]">
                          <p className="m-0">Subtotal</p>
                        </div>
                        <div className="self-stretch relative font-medium z-[1]">
                          <p className="m-0">Total</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mini text-black">
                        <div className="flex flex-col items-start justify-start gap-[5px]">
                          <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                            Price : 1.600 KD
                          </div>
                          <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                            Price : 1.600 KD
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12.5px] max-w-full text-xl">
                    <div className="self-stretch h-[0.5px] relative box-border z-[1] border-t-[0.5px] border-solid border-silver-200" />
                    <div className="w-[551px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                        <div className="h-[27px] w-[138px] relative font-medium inline-block shrink-0 z-[1] mq450:text-base">
                          <p className="m-0">Total</p>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-lg">
                          <div className="relative font-medium z-[1]">
                            Price : 1.600 KD
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              {/* <div className="flex flex-col px-14 pt-12 pb-20 w-full rounded-md border border-solid bg-neutral-100 border-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="self-center text-2xl font-medium text-black">
        Your Order Summary
      </div>
      <div className="flex z-10 flex-col mt-12 max-w-full w-[104px] max-md:mt-10">
        <div className="flex justify-center items-center px-6 py-2 bg-white rounded border border-solid border-stone-300 max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6299d123a8ab1f15e9bde5c0b9b6ac3f8bad733cbefcd7079c13d93d7a213dcd?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6299d123a8ab1f15e9bde5c0b9b6ac3f8bad733cbefcd7079c13d93d7a213dcd?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6299d123a8ab1f15e9bde5c0b9b6ac3f8bad733cbefcd7079c13d93d7a213dcd?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6299d123a8ab1f15e9bde5c0b9b6ac3f8bad733cbefcd7079c13d93d7a213dcd?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6299d123a8ab1f15e9bde5c0b9b6ac3f8bad733cbefcd7079c13d93d7a213dcd?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6299d123a8ab1f15e9bde5c0b9b6ac3f8bad733cbefcd7079c13d93d7a213dcd?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6299d123a8ab1f15e9bde5c0b9b6ac3f8bad733cbefcd7079c13d93d7a213dcd?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6299d123a8ab1f15e9bde5c0b9b6ac3f8bad733cbefcd7079c13d93d7a213dcd?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
            className="aspect-[0.74] w-[59px]"
          />
          
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/313c59efa1ed2004dd1d28b251848d717bd70d142eaac53aa71a888819e13a14?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/313c59efa1ed2004dd1d28b251848d717bd70d142eaac53aa71a888819e13a14?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/313c59efa1ed2004dd1d28b251848d717bd70d142eaac53aa71a888819e13a14?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/313c59efa1ed2004dd1d28b251848d717bd70d142eaac53aa71a888819e13a14?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/313c59efa1ed2004dd1d28b251848d717bd70d142eaac53aa71a888819e13a14?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/313c59efa1ed2004dd1d28b251848d717bd70d142eaac53aa71a888819e13a14?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/313c59efa1ed2004dd1d28b251848d717bd70d142eaac53aa71a888819e13a14?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/313c59efa1ed2004dd1d28b251848d717bd70d142eaac53aa71a888819e13a14?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
          className="self-center mt-9 w-full aspect-[1.1]"
        />
        <div className="mt-10 text-base font-medium text-stone-400">
          Subtotal
          <br />
        </div>
        <div className="mt-5 text-base font-medium text-stone-400">
          Total
          <br />
        </div>
        <div className="mt-12 text-xl font-medium text-black max-md:mt-10">
          Total
          <br />
        </div>
      </div>
      <div className="flex flex-col self-center mt-0 max-w-full font-medium w-[137px] max-md:mt-0">
        <div className="text-base text-black">10w40 United Oil</div>
        <div className="flex gap-2 mt-3.5 text-xs whitespace-nowrap text-neutral-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e0fd525f6a4d0bf373353179a9c503f858cf2f7752a305678aee5607df1fa2?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
            className="shrink-0 max-w-full aspect-[5] w-[104px]"
          />
          <div>(4.7)</div>
        </div>
      </div>
      <div className="z-10 self-end -mt-10 text-base font-medium text-zinc-600">
        Price : 3.500 KD
      </div>
      <div className="flex z-10 flex-col self-center mt-28 max-w-full font-medium w-[137px] max-md:mt-10">
        <div className="text-base text-black">
          5w30 united oil
          <br />
        </div>
        <div className="flex gap-2 mt-3.5 text-xs whitespace-nowrap text-neutral-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f931c05eef3b0d21133a9ae6884b6462e0aa837449693301c3f58091e4a1a67?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
            className="shrink-0 max-w-full aspect-[5] w-[104px]"
          />
          <div>(4.7)</div>
        </div>
      </div>
      <div className="self-end -mt-10 text-base font-medium text-zinc-600 max-md:mr-1">
        Price : 1.600 KD
      </div>
      <div className="flex flex-col self-end mt-24 text-base font-medium text-black max-md:mt-10 max-md:mr-1">
        <div>Price : 1.600 KD</div>
        <div className="mt-4">Price : 1.600 KD</div>
        <div className="mt-14 text-lg max-md:mt-10">Price : 1.600 KD</div>
      </div>
    </div> */}
                
              </div>
        
       
    
   </>
  );
};

export default Checkout;
