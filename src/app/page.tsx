import SideMenu from "@/components/side-menu";
import Earning from "@/components/earning";
import Image from "next/image";
import { PeopleDataTable } from "@/table/data-table";
import { columns } from "@/table/columns";
import { people } from "@/table/people";
export default function Home() {
  return (
    <div className="w-full relative bg-ghostwhite-100 overflow-hidden flex flex-row items-start justify-start content-start gap-[94.4px] leading-[normal]">
      <SideMenu />
      <section className="w-[1287.5px] flex flex-col items-start justify-start pt-[53.2px] px-0 pb-0 box-border max-w-full text-left text-[31.9px] text-black font-poppins lg:pt-[35px] lg:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[52.6px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between top-[0] z-[99] sticky gap-5">
            <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
              <div className="relative font-medium whitespace-nowrap">
                Hello Evano 👋🏼,
              </div>
            </div>
            <div className="w-[287.3px] shadow-[0px_13.3px_79.8px_rgba(226,_236,_249,_0.5)] rounded-[15.96px] bg-white flex flex-row items-start justify-start pt-[9.3px] px-2.5 pb-[9.2px] box-border gap-[10.7px]">
              {/* <div className="h-[50.5px] w-[287.3px] relative shadow-[0px_13.3px_79.8px_rgba(226,_236,_249,_0.5)] rounded-[15.96px] bg-white hidden" /> */}
              <Image
                height={31.9}
                width={31.9}
                className="relative overflow-hidden shrink-0 min-h-[32px] z-[1]"
                alt=""
                src="/search-1.svg"
              />
              <input
                className="w-[65px] [border:none] [outline:none] bg-[transparent] h-8 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-poppins text-lg-6 text-silver"
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
          <Earning />
          <PeopleDataTable columns={columns} data={people} />
          {/* <Product /> */}
        </div>
      </section>
    </div>
  );
}
