import Image from "next/image";
import Earning from "@/components/earning";
import PeopleDataTable from "@/table/data-table";
import { columns } from "@/table/columns";
import { people } from "@/table/people";
import SideMenu from "@/components/side-menu";

export default function Home() {
  return (
    <div className="flex flex-row">
      <SideMenu />
      <div className="w-full lg:mr-[80px]">
        <div className="flex flex-col items-center h-full lg:mr-[60px] sm:mx-[40px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-[30px] py-[30px] gap-5 w-full">
            <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
              <div className="relative font-medium whitespace-nowrap text-7xl">
                Hello Evano 👋🏼,
              </div>
            </div>
            <div className="w-[287.3px] shadow-[0px_13.3px_79.8px_rgba(226,_236,_249,_0.5)] rounded-[15.96px] bg-white flex flex-row items-start justify-start pt-[9.3px] px-2.5 pb-[9.2px] box-border gap-[10.7px]">
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
        </div>
      </div>
    </div>

  );
}
