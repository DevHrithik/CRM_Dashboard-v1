"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function PeopleDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
    },
  });

  return (
    <div className="shadow-[0px_13.3px_79.8px_rgba(226,_236,_249,_0.5)] rounded-20xl-9 bg-white flex flex-col items-start justify-start lg:justify-between pt-[39.9px] mx-[20px] pb-[53.2px] box-border gap-[53.1px] mt-[40px] text-left text-10xl-3 text-black font-poppins w-full h-full overflow-hidden">
      <div className="flex flex-col lg:flex-row md:pl-[38px] overflow-y-auto">
        <div className="flex flex-col pl-9 items-start justify-start gap-[9.2px]">
          <div className="relative tracking-[-0.01em] font-semibold truncate">
            All Customers
          </div>
          <div className="relative text-lg-6 tracking-[-0.01em] text-mediumaquamarine-200 z-[1]">
            Active Members
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="pl-9 pt-5 lg:pl-[66px] md:pr-[41px] flex flex-col md:flex-row items-start justify-start gap-[30px] xs:gap-[52px] max-w-full">
            <div className="w-[216px] rounded-sm-3 flex flex-row items-start justify-start py-[9.3px] px-2.5 box-border gap-[10.7px] z-[1]">
              <Image
                height={31.9}
                width={31.9}
                className="relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/search-1.svg"
              />
              <Input
                className="w-14 [border:none] [outline:none] bg-[transparent] h-7 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-poppins text-base text-silver"
                placeholder="Search"
                type="text"
                value={
                  (table
                    .getColumn("customer_name")
                    ?.getFilterValue() as string) || ""
                }
                onChange={(e) => {
                  table
                    .getColumn("customer_name")
                    ?.setFilterValue(e.target.value);
                }}
              />
            </div>
            <div className="rounded-sm-3 bg-ghostwhite-200 flex flex-row items-start justify-start pt-[13.3px] pb-[13.2px] pl-5 pr-4 gap-[9.9px] whitespace-nowrap">
              <div className="relative text-base tracking-[-0.01em] text-left">
                <span className="font-poppins text-gray-200">{`Short by : `}</span>
                <span className="font-semibold font-poppins text-darkslategray-200">
                  Newest
                </span>
              </div>
              <Image
                height={23.9}
                width={23.9}
                className="relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                alt=""
                src="/chevrondown-1.svg"
              />
            </div>
          </div>
          <div className="flex items-end justify-end sm:pr-[41px]">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="cursor-pointer [border:none] mt-6 xl:py-[10px] px-[34px] md:px-[45px] bg-ghostwhite-200 text-[#7E7E7E]rounded-sm-3 hover:bg-gainsboro-200 text-[18px] font-normal font-poppins leading-[18px] lg:px-[20px]">
                  Add Customer
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when youre
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="pl-[50px] w-full pr-[58.52px] tracking-[1%] mb-[20px]">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        className="text-[18.62px] border-whitesmoke-300 border-b pb-[18.55px] text-[#B5B7C0] font-medium"
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        className="text-[18.62px] border-b border-whitesmoke-300 py-[26px] text-[#292D32] font-medium"
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pl-[50px] pr-[54px] box-border max-w-full lg:pl-[25px] lg:pr-[27px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
            <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0 box-border max-w-full">
              <div className="relative tracking-tighter text-[#B5B7C0] text-[18.62px] font-medium whitespace-pre-wrap z-[1]">
                Showing data 1 to 8 of 256K entries
              </div>
            </div>
            <div className="w-[359.8px] flex flex-row items-start justify-start gap-[16.1px] max-w-full z-[1] text-base text-darkslategray-100">
              <div className="flex-[0.5059] rounded-[5.32px] bg-whitesmoke-100 border-whitesmoke-300 border-[1.3px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-3 pr-[9px] min-w-[21px]">
                <div className="relative tracking-[-0.01em] leading-[100%] font-medium inline-block min-w-[10px]">{`<`}</div>
              </div>
              <div className="flex-[0.3136] rounded-[5.32px] bg-blueviolet border-blueviolet border-[1.3px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-[13px] pr-[11px] min-w-[21px] text-white">
                <div className="relative tracking-[-0.01em] leading-[100%] font-medium inline-block min-w-[6px]">
                  1
                </div>
              </div>
              <div className="hidden flex-[0.5059] rounded-[5.32px] bg-whitesmoke-100 border-whitesmoke-300 border-[1.3px] border-solid box-border sm:flex flex-row items-start justify-start py-1.5 pl-[11px] pr-2.5 min-w-[21px]">
                <div className="relative tracking-[-0.01em] leading-[100%] font-medium inline-block min-w-[10px]">
                  2
                </div>
              </div>
              <div className="hidden flex-[0.5465] rounded-[5.32px] bg-whitesmoke-100 border-whitesmoke-300 border-[1.3px] border-solid box-border sm:flex flex-row items-start justify-start py-1.5 pl-2.5 pr-[9px] min-w-[21px]">
                <div className="relative tracking-[-0.01em] leading-[100%] font-medium inline-block min-w-[10px]">
                  3
                </div>
              </div>
              <div className="hidden flex-[0.5292] rounded-[5.32px] bg-whitesmoke-100 border-whitesmoke-300 border-[1.3px] border-solid box-border sm:flex flex-row items-start justify-start py-1.5 pl-[11px] pr-2.5 min-w-[21px]">
                <div className="relative tracking-[-0.01em] leading-[100%] font-medium inline-block min-w-[11px]">
                  4
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[10.7px] px-0 pb-0 text-black">
                <div className="relative tracking-[-0.01em] leading-[100%] font-medium inline-block min-w-[12px]">
                  ...
                </div>
              </div>
              <div className="hidden flex-1 rounded-[5.32px] bg-whitesmoke-100 border-whitesmoke-300 border-[1.3px] border-solid box-border sm:flex flex-row items-start justify-start py-1.5 pl-1.5 pr-[5px] min-w-[21px]">
                <div className="relative tracking-[-0.01em] leading-[100%] font-medium inline-block min-w-[21px]">
                  40
                </div>
              </div>
              <div className="flex-[0.5059] rounded-[5.32px] bg-whitesmoke-100 border-whitesmoke-300 border-[1.3px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-[11px] pr-2.5 min-w-[21px]">
                <div className="relative tracking-[-0.01em] leading-[100%] font-medium inline-block min-w-[10px]">{`>`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
