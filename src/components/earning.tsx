import Image from "next/image";

const Earning = () => {
  return (
    < div className="flex self-stretch flex-col justify-center items-center lg:justify-around md:flex-row shadow-[0px_13.3px_79.8px_rgba(226,_236,_249,_0.5)] text-left text-lg-6 text-darkgray font-poppins pl-[30px] lg:pl-[66px] py-[32px] pr-[60px] lg:pr-[88px] my-[40px] bg-white rounded-20xl-9 overflow-hidden w-auto pb-12" >
      <div className="pt-[1.3px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[26.6px]">
          <Image
            height={84}
            width={84}
            className="relative min-h-[112px]"
            loading="lazy"
            alt=""
            src="/group-10.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[6.4px]">
            <div className="relative tracking-[-0.01em] truncate">Total Customers</div>
            <div className="relative text-23xl-6 tracking-[-0.01em] leading-[43px] font-semibold text-darkslategray-300 inline-block min-w-[115px] ">
              5,423
            </div>
            <div className="flex flex-row items-start justify-start pt-0 pb-[0.1px] pl-0 pr-0.5 gap-1 text-base text-forestgreen">
              <Image
                height={26.6}
                width={26.6}
                className="relative overflow-hidden shrink-0 min-h-[27px]"
                loading="lazy"
                alt=""
                src="/arrowup-1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                <div className="relative tracking-[-0.01em] inline-block min-w-[118px] shrink-0">
                  <b>16%</b>
                  <span className="text-darkslategray-400"> this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[117px] w-[1.3px] relative border-whitesmoke-200 border-r-[1.3px] border-solid box-border px-[56px]" />
      <div className="pt-[1.3px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[26.6px]">
          <Image
            height={84}
            width={84}
            className="relative min-h-[112px]"
            loading="lazy"
            alt=""
            src="/group-10-1.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[6.4px] shrink-0">
            <a className="[text-decoration:none] relative tracking-[-0.01em] text-[inherit] inline-block min-w-[87px]">
              Members
            </a>
            <div className="relative text-23xl-6 tracking-[-0.01em] leading-[43px] font-semibold text-darkslategray-300 inline-block min-w-[104px] ">
              1,893
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[0.1px] gap-1 text-base text-crimson">
              <Image
                height={26.6}
                width={26.6}
                className="relative overflow-hidden shrink-0 min-h-[27px]"
                loading="lazy"
                alt=""
                src="/arrowup-1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                <div className="relative tracking-[-0.01em] inline-block min-w-[108px]">
                  <b>1%</b>
                  <span className="text-darkslategray-400"> this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[117px] w-[1.3px] hidden sm:block relative border-whitesmoke-200 border-r-[1.3px] border-solid box-border px-[56px]" />
      <div className="">
        <div className="flex flex-row items-start justify-start pt-[1.3px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[26.6px]">
            <Image
              height={84}
              width={84}
              className="relative min-h-[112px]"
              loading="lazy"
              alt=""
              src="/group-10-2.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[5.3px]">
              <div className="relative tracking-[-0.01em] inline-block min-w-[101px]">
                Active Now
              </div>
              <div className="relative text-23xl-6 tracking-[-0.01em] leading-[43px] font-semibold text-darkslategray-300 inline-block min-w-[69px]">
                189
              </div>
              <div className="flex flex-row items-start">
                <Image
                  height={34.6}
                  width={34.6}
                  className="z-[10]"
                  alt=""
                  src="/ellipse-58@2x.png"
                />
                <Image
                  height={34.6}
                  width={34.6}
                  className="z-[20] -ml-[10px]"
                  alt=""
                  src="/ellipse-59@2x.png"
                />
                <Image
                  height={34.6}
                  width={34.6}
                  className="-ml-[10px] z-[30]"
                  alt=""
                  src="/ellipse-60@2x.png"
                />
                <Image
                  height={34.6}
                  width={34.6}
                  className="-ml-[10px] z-[40]"
                  alt=""
                  src="/ellipse-61@2x.png"
                />
                <Image
                  height={34.6}
                  width={34.6}
                  className="-ml-[10px] z-[50]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-62@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Earning;

