import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { AiOutlineLink } from "react-icons/ai";
import { BiUnlink } from "react-icons/bi";
export interface IQuestion {
  Id: number;
  name: string;
  category: string;
  level: string;
  link: string;
  videourl: string;
}

export const Columns: ColumnDef<IQuestion>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="text-white"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="text-white"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="flex items-center justify-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Id
        {column.getIsSorted() === "asc" ? (
          <ChevronUpIcon className="w-4 h-4" />
        ) : column.getIsSorted() === "desc" ? (
          <ChevronDownIcon className="w-4 h-4" />
        ) : (
          <ChevronUpIcon className="w-4 h-4" />
        )}
      </Button>
    ),
    cell: ({ row }) => {
      const id: number = row.getValue("Id");
      return <div className="text-center">{id}</div>;
    },
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Category",
    header: "Category",
  },
  {
    accessorKey: "Level",
    header: () => <div className="text-right">Level</div>,
    cell: ({ row }) => {
      const level: string = row.getValue("Level");
      return (
        <div className="text-right">
          {level === "easy" ? (
            <span className="text-green-500">{level}</span>
          ) : level === "medium" ? (
            <span className="text-yellow-500">{level}</span>
          ) : level === "hard" ? (
            <span className="text-red-500">{level}</span>
          ) : (
            <span className="text-primary">no level</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "Link",
    header: () => <div className="text-right">Link</div>,
    cell: ({ row }) => {
      const link: string = row.getValue("Link");
      return (
        <div className="text-right">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <AiOutlineLink />
          </a>
        </div>
      );
    },
  },
  {
    accessorKey: "videourl",
    header: "Solution",
    cell: ({ row }) => {
      const videourl: string = row.getValue("videourl");
      return (
        <div className="text-right">
          {videourl === "" ? (
            <p rel="noopener noreferrer" className="text-red-500">
              <BiUnlink />
            </p>
          ) : (
            <a
              href={videourl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <AiOutlineLink />
            </a>
          )}
        </div>
      );
    },
  },
];
