import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const FilterSection = ({
  selectedStatus,
  listSelectValue,
  setListSelectValue,
  table,
  setSelectedStatus,
}: any) => {
  return (
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
          value={selectedStatus || "all"}
          onValueChange={(value) => setSelectedStatus(value)}
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
  );
};

export default FilterSection;
