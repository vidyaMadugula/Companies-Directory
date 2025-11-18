export default function Filters({
  search, setSearch,
  location, setLocation,
  industry, setIndustry
}) {
  const locations = ["Hyderabad", "Bangalore", "Chennai", "Pune", "Mumbai"];
  const industries = ["Software", "Agriculture", "Logistics", "Healthcare", "Real Estate"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Search */}
      <input
        type="text"
        placeholder="Search companies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`
          p-2 rounded-lg text-sm transition-all border
          ${search
            ? "border-2 border-green-600 ring-1 ring-green-300"
            : "border-gray-300 hover:border-2 hover:border-green-600"
          }
        `}
      />

      {/* Location */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={`
          p-2 rounded-lg text-sm cursor-pointer transition-all appearance-none border

          ${
            location === "" 
              ? "border-gray-300 hover:border-2 hover:border-green-600"    
              : "border-2 border-green-600 ring-1 ring-green-300"          
          }
        `}
      >
        <option value="">All Locations</option>
        {locations.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>

      {/* Industry */}
      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className={`
          p-2 rounded-lg text-sm cursor-pointer transition-all appearance-none border

          ${
            industry === ""
              ? "border-gray-300 hover:border-2 hover:border-green-600"
              : "border-2 border-green-600 ring-1 ring-green-300"
          }
        `}
      >
        <option value="">All Industries</option>
        {industries.map(ind => (
          <option key={ind} value={ind}>{ind}</option>
        ))}
      </select>

    </div>
  );
}
