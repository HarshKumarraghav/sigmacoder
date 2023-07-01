import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Section2 = () => {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between">
      <div className="w-full">
        <div className="sticky md:top-16 top-12 py-2 blur__effect z-20 w-full flex gap-x-4 md:justify-between flex-wrap md:flex-nowrap gap-y-2 md:gap-y-0">
          <div className="hidden md:flex w-1/3">
            <Select>
              <SelectTrigger className="w-[100px] md:w-44 border-primary text-primary">
                <SelectValue placeholder="List" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blind75">Blind 75</SelectItem>
                <SelectItem value="lovebabar">Love Babar Sheet</SelectItem>
                <SelectItem value="fraz">Fraz Sheet</SelectItem>
                <SelectItem value="apnacollege">Apna College Sheet</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full justify-around md:justify-between gap-3 md:w-2/3  flex flex-wrap md:flex-nowrap">
            <Select>
              <SelectTrigger className="md:hidden w-[100px] md:w-44 border-primary text-primary">
                <SelectValue placeholder="List" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blind75">Blind 75</SelectItem>
                <SelectItem value="lovebabar">Love Babar Sheet</SelectItem>
                <SelectItem value="fraz">Fraz Sheet</SelectItem>
                <SelectItem value="apnacollege">Apna College Sheet</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px] md:w-44 border-primary text-primary">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent className="">
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
            <Select>
              <SelectTrigger className="w-[100px] md:w-44 border-primary text-primary">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="todo">Todo</SelectItem>
                <SelectItem value="solved">Solved</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="text"
              placeholder="Search Question..."
              className="w-72 md:w-96 border-primary text-primary placeholder:text-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
