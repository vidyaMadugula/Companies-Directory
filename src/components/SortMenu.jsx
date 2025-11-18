import { ChevronDown } from "lucide-react";

const options = [
  { value: "", label: "Sort By" },
  { value: "name-asc", label: "Name (A → Z)" },
  { value: "name-desc", label: "Name (Z → A)" },
  { value: "employees-asc", label: "Employees (Low → High)" },
  { value: "employees-desc", label: "Employees (High → Low)" },
  { value: "founded-new", label: "Founded (Newest First)" },
  { value: "founded-old", label: "Founded (Oldest First)" }
];

export default function SortMenu({ value, onChange }) {
  const isSelected = value !== "";

  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          p-2 rounded-lg text-sm pr-8 w-full cursor-pointer
          appearance-none focus:outline-none transition-all duration-200

          ${isSelected
            ? "border-2 border-green-600 ring-1 ring-green-300"  
            : "border border-gray-300 hover:border-2 hover:border-green-600"}   // default + hover state
        `}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  );
}
