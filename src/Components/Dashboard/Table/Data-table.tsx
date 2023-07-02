import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { SetStateAction, useEffect, useState } from "react";
import { useDashboard } from "@/Context/DashboardContext/DashbaordContext";
import { Input } from "@/components/ui/input";
import { Value } from "@radix-ui/react-select";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [listSelectValue, setListSelectValue] = useState<any>(null);
  const [statusSelectValue, setStatusSelectValue] = useState<any>(null);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <>
      <div className="sticky md:top-16 top-12 py-2 blur__effect z-20 w-full flex gap-x-4 md:justify-between flex-wrap md:flex-nowrap gap-y-2 md:gap-y-0">
        <div className="hidden md:flex w-1/3">
          <Select
            value={listSelectValue || "all"}
            onValueChange={(value) => setListSelectValue(value)}
          >
            <SelectTrigger className="w-[100px] md:w-44 border-primary text-primary">
              <SelectValue placeholder="List" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All in One</SelectItem>
              <SelectItem value="blind75">Blind 75</SelectItem>
              <SelectItem value="lovebabar">Love Babar Sheet</SelectItem>
              <SelectItem value="fraz">Fraz Sheet</SelectItem>
              <SelectItem value="apnacollege">Apna College Sheet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full justify-around md:justify-between gap-3 md:w-2/3  flex flex-wrap md:flex-nowrap">
          <Select
            value={listSelectValue || "all"}
            onValueChange={(value) => setListSelectValue(value)}
          >
            <SelectTrigger className="md:hidden w-[100px] md:w-44 border-primary text-primary">
              <SelectValue placeholder="List" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All in One</SelectItem>
              <SelectItem value="blind75">Blind 75</SelectItem>
              <SelectItem value="lovebabar">Love Babar Sheet</SelectItem>
              <SelectItem value="fraz">Fraz Sheet</SelectItem>
              <SelectItem value="apnacollege">Apna College Sheet</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={
              (table.getColumn("Level")?.getFilterValue() as string) ?? "all"
            }
            onValueChange={(value) => {
              if (value === "all") {
                table.getColumn("Level")?.setFilterValue(undefined);
              } else {
                table.getColumn("Level")?.setFilterValue(value);
              }
            }}
          >
            <SelectTrigger className="w-[100px] md:w-44 border-primary text-primary">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="all" className="text-primary">
                All
              </SelectItem>
              <SelectItem value="easy" className="text-green-500">
                Easy
              </SelectItem>
              <SelectItem value="medium" className="text-yellow-500">
                Medium
              </SelectItem>
              <SelectItem value="hard" className="text-red-500">
                Hard
              </SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={
              (table.getColumn("Status")?.getFilterValue() as string) ?? "all"
            }
            onValueChange={(value) => {
              if (value === "all") {
                table.getColumn("Status")?.setFilterValue(undefined);
              } else {
                table.getColumn("Status")?.setFilterValue(value);
              }
            }}
          >
            <SelectTrigger className="w-[100px] md:w-44 border-primary text-primary">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="todo">Todo</SelectItem>
              <SelectItem value="solved">Solved</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Search Question..."
            value={(table.getColumn("Name")?.getFilterValue() as string) ?? ""}
            onChange={(event: any) =>
              table.getColumn("Name")?.setFilterValue(event.target.value)
            }
            className="w-72 md:w-96 border-primary text-primary placeholder:text-primary"
          />
        </div>
      </div>
      <div className="md:mt-6 rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
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
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
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

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <DoubleArrowLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <DoubleArrowRightIcon />
        </Button>
        <span className="flex items-center gap-1 text-sm">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1 text-sm">
          | Go to page:
          <input
            type="number"
            min={0}
            max={table.getPageCount() - 1}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-10 text-center"
          />
        </span>
      </div>
    </>
  );
}
