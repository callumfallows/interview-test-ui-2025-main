import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../../../components/ui/dropdown-menu";

interface MovieDropDownProps {
  label: string;
  options: Array<{ key: string | number; value: string | number; text: string }>;
  selectedValue: string | number;
  onChange: (value: string | number) => void;
}

export function MovieDropDown({ options, selectedValue, onChange, label }: MovieDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-0">
        {label}: {options.find(opt => opt.value === selectedValue)?.text}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        {options.map(option => (
          <DropdownMenuItem
            key={option.key}
            onClick={() => onChange(option.value)}
            className="cursor-pointer"
          >
            {option.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
