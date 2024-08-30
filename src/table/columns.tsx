"use client";
import { ColumnDef } from "@tanstack/react-table";
import { People } from "./people";
import { cn } from "@/lib/utils";
export const columns: ColumnDef<People>[] = [
  {
    accessorKey: "customer_name",
    header: "Customer Name",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <button
          className={cn(
            "cursor-pointer border-[1.3px] border-solid w-[111.7px] rounded-[5.32px] box-border flex flex-row items-start hove:border-solid hover:box-border hover:border-[1.3px]",
            {
              "border-red-200 pt-1 pb-[3px] pl-[18px] pr-[17px] bg-pink hover:bg-lightpink hover:border-red-100 ":
                row.getValue("status") === "Inactive",
              "border-mediumseagreen py-[3px] pl-[26px] pr-[25px] bg-mediumaquamarine-300 hover:bg-seagreen-200 hover:border-mediumaquamarine-100":
                row.getValue("status") === "Active",
            },
          )}
        >
          <div
            className={cn(
              "relative text-lg-6 tracking-[-0.01em] font-medium font-poppins text-left inline-block min-w-[74px]",
              {
                "text-red-200": row.getValue("status") === "Inactive",
                "text-seagreen-100": row.getValue("status") === "Active",
              },
            )}
          >
            {row.getValue("status")}
          </div>
        </button>
      );
    },
  },
];
