import { useState, useMemo } from "react";

export default function useFilters(companies) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filtered = useMemo(() => {
    const s = search.toLowerCase();

    let result = companies.filter((c) => {
      return (
        (c.name.toLowerCase().includes(s) ||
          c.location.toLowerCase().includes(s) ||
          c.industry.toLowerCase().includes(s)) &&
        (location ? c.location === location : true) &&
        (industry ? c.industry === industry : true)
      );
    });

    // -------- SORTING ------------
    const sorted = [...result]; 

    switch (sortOption) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "employees-asc":
        sorted.sort((a, b) => Number(a.employees) - Number(b.employees));
        break;

      case "employees-desc":
        sorted.sort((a, b) => Number(b.employees) - Number(a.employees));
        break;

      case "founded-new":
        sorted.sort((a, b) => Number(b.founded) - Number(a.founded)); 
        break;

      case "founded-old":
        sorted.sort((a, b) => Number(a.founded) - Number(b.founded));
        break;

      default:
        break;
    }

    return sorted; // Return NEW array
  }, [companies, search, location, industry, sortOption]);

  return {
    search,
    setSearch,
    location,
    setLocation,
    industry,
    setIndustry,
    sortOption,
    setSortOption,
    filtered
  };
}

