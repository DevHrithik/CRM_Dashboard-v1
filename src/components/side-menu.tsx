import Image from "next/image";

const SideMenu = () => {
  return (
    <div
      className="shadow-[0px_13.3px_79.8px_rgba(226,_236,_249,_0.5)] bg-white flex flex-col items-start justify-start pt-[47.9px] px-[37px] pb-[11px] box-border max-w-full text-left text-lg-6 text-black font-poppins h-dvh w-dvh sticky top-0 max-xl:hidden"
    >
      <div className="h-screen relative shadow-[0px_13.3px_79.8px_rgba(226,_236,_249,_0.5)] bg-white hidden" />
      <div className="flex flex-row items-start justify-start gap-[4.8px] text-15xl-6">
        <div className="flex flex-row items-center justify-start gap-[10.7px] z-[1]">
          <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
            <Image
              height={37}
              width={37}
              className="relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/setting-1.svg"
            />
          </div>
          <div className="relative tracking-[0.01em] font-semibold">
            Dashboard
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-6 px-0 pb-0 text-sm-3 text-gray-100">
          <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[24px] z-[1]">
            v.01
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start px-0 pb-[100px] box-border gap-[40px] max-w-full text-lightslategray pt-10">
        <div className="flex flex-row items-start justify-start py-0 px-3.5">
          <div className="flex flex-row items-start justify-start gap-[18.6px] z-[1]">
            <Image
              height={24}
              width={24}
              className="relative overflow-hidden shrink-0 min-h-[32px]"
              loading="lazy"
              alt=""
              src="/icon--24--outline--keysquare.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
              <a className="[text-decoration:none] relative tracking-[-0.01em] font-medium text-[inherit] inline-block min-w-[104px] shrink-0">
                Dashboard
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[28.6px] max-w-full">
          <button className="self-stretch flex flex-row items-start justify-end py-0 pl-[15px] pr-2.5">
            <div className="flex-1 flex flex-row items-end justify-between gap-3 z-[1] cursor-pointer">
              <div className="flex flex-row items-start justify-start gap-[18.6px] shrink-0">
                <Image
                  height={24}
                  width={24}
                  className="relative overflow-hidden shrink-0 min-h-[32px]"
                  loading="lazy"
                  alt=""
                  src="/3dsquare-1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                  <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[72px] shrink-0">
                    Product
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.3px]">
                <Image
                  height={16}
                  width={16}
                  className="relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevronright-2.svg"
                />
              </div>
            </div>
          </button>
          <div className="self-stretch h-[301.9px] flex flex-col items-end justify-start pt-0 px-0 pb-[85.1px] box-border gap-[53.2px] max-w-full">
            <button className="self-stretch flex flex-col items-end justify-start gap-[38.6px] max-w-full text-white">
              <div className="self-stretch rounded-[10.64px] bg-blueviolet flex flex-row items-start justify-start pt-[14.6px] pb-[14.7px] pl-3.5 pr-2.5 box-border shrink-0 max-w-full z-[1]">
                <div className="h-[61.2px] w-[332.5px] relative rounded-[10.64px] bg-blueviolet hidden max-w-full" />
                <div className="flex-1 flex flex-row items-end justify-between gap-5 z-[2]">
                  <div className="flex flex-row items-start justify-start gap-[18.6px] shrink-0">
                    <Image
                      height={24}
                      width={24}
                      className="relative overflow-hidden shrink-0 min-h-[32px]"
                      loading="lazy"
                      alt=""
                      src="/usersquare-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                      <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[102px] shrink-0">
                        Customers
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.2px]">
                    <Image
                      height={16}
                      width={16}
                      className="relative overflow-hidden shrink-0"
                      alt=""
                      src="/chevronright-2-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[15px] pr-2.5 text-lightslategray">
                <div className="flex-1 flex flex-row items-start justify-between shrink-0 gap-5 z-[1]">
                  <div className="flex flex-row items-start justify-start gap-[18.6px] shrink-0">
                    <Image
                      height={24}
                      width={24}
                      className="relative overflow-hidden shrink-0 min-h-[32px]"
                      loading="lazy"
                      alt=""
                      src="/walletmoney-2.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0">
                      <a className="[text-decoration:none] relative tracking-[-0.01em] font-medium text-[inherit] inline-block min-w-[70px] shrink-0">
                        Income
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0">
                    <Image
                      height={16}
                      width={16}
                      className="relative overflow-hidden shrink-0"
                      alt=""
                      src="/chevronright-2.svg"
                    />
                  </div>
                </div>
              </div>
            </button>
            <button className="self-stretch flex flex-row items-start justify-end py-0 pl-[15px] pr-2.5">
              <div className="flex-1 flex flex-row items-end justify-between gap-5 z-[1]">
                <div className="flex flex-row items-start justify-start gap-[18.6px] shrink-0">
                  <Image
                    height={24}
                    width={24}
                    className="relative overflow-hidden shrink-0 min-h-[32px]"
                    loading="lazy"
                    alt=""
                    src="/discountshape-1.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0">
                    <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[79px] shrink-0">
                      Promote
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.3px]">
                  <Image
                    height={16}
                    width={16}
                    className="relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevronright-2.svg"
                  />
                </div>
              </div>
            </button>
            <button className="self-stretch flex flex-row items-start justify-end py-0 pl-[15px] pr-2.5">
              <div className="flex-1 flex flex-row items-start justify-between gap-3 z-[1]">
                <div className="flex flex-row items-start justify-start gap-[18.6px] shrink-0">
                  <Image
                    height={24}
                    width={24}
                    className="relative overflow-hidden shrink-0 min-h-[32px]"
                    loading="lazy"
                    alt=""
                    src="/messagequestion-1.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                    <div className="relative tracking-[-0.01em] font-medium inline-block shrink-0">
                      Help
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0">
                  <Image
                    height={16}
                    width={16}
                    className="relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevronright-2.svg"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[61.2px] max-w-full text-center text-white">
        <div className="self-stretch rounded-7xl-6 [background:linear-gradient(107.91deg,_#eaabf0,_#4623e9)] flex flex-col items-start justify-start pt-[34.6px] pb-[29.2px] pl-8 pr-[30px] box-border gap-[26.5px] max-w-full z-[1]">
          <div className="w-[300px] h-[150px] relative rounded-7xl-6 [background:linear-gradient(107.91deg,_#eaabf0,_#4623e9)] hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-3.5">
            <div className="flex-1 relative tracking-[0.01em] font-semibold whitespace-pre-wrap z-[1]">
              Upgrade to PRO to get access all Features!
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[13.3px] px-[73px] pb-[11.9px] bg-white self-stretch shadow-[2.7px_5.3px_5.32px_rgba(79,_42,_234,_0.17)] rounded-7xl-6 flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro-100">
            <div className="h-[53.2px] w-[270px] relative shadow-[2.7px_5.3px_5.32px_rgba(79,_42,_234,_0.17)] rounded-7xl-6 bg-white hidden" />
            <div className="relative text-lg-6 tracking-[0.01em] font-semibold font-poppins text-mediumblue text-center inline-block min-w-[123px] z-[1]">
              Get Pro Now!
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5 text-left text-black">
          <div className="w-[205.9px] flex flex-row items-end justify-start gap-4 shrink-0">
            <Image
              height={55.9}
              width={55.9}
              className="relative rounded-[50%] object-cover min-h-[56px] shrink-0 z-[1]"
              alt=""
              src="/ellipse-8@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.6px]">
              <div className="self-stretch flex flex-col items-start justify-start shrink-0 z-[1]">
                <div className="h-[26.6px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                  <div className="mb-[-1.4px] relative tracking-[0.01em] font-medium inline-block min-w-[58px] shrink-0">
                    Evano
                  </div>
                </div>
                <div className="relative text-base tracking-[0.01em] text-gray-300 shrink-0">
                  Project Manager
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <Image
              height={21.3}
              width={31.9}
              className="relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/chevrondown-2.svg"
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default SideMenu;
