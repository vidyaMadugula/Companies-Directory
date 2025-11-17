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
        className="border p-2 rounded-lg"
      />

      {/* Location */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="">All Locations</option>
        {locations.map(loc => <option key={loc} value={loc}>{loc}</option>
)}
      </select>

      {/* Industry */}
      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="">All Industries</option>
        {industries.map(ind => <option key={ind} value={ind}>{ind}</option>
)}
      </select>

    </div>
  );
}
