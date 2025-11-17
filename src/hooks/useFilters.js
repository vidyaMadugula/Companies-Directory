import { useState, useMemo } from "react";

export default function useFilters(companies) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  const filtered = useMemo(() => {
    const s = search.toLowerCase();

    return companies.filter((c) => {
      return (
        (c.name.toLowerCase().includes(s) ||
          c.location.toLowerCase().includes(s) ||
          c.industry.toLowerCase().includes(s)) &&
        (location ? c.location === location : true) &&
        (industry ? c.industry === industry : true)
      );
    });
  }, [companies, search, location, industry]);

  return {
    search,
    setSearch,
    location,
    setLocation,
    industry,
    setIndustry,
    filtered
  };
}
