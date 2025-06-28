import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className="bg-white rounded-2xl p-6 flex justify-between items-center">
      <p className="font-semibold">Бөөндье</p>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search products..."
          className="pl-10 w-[300px]"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
