import { useEffect, useState } from "react";
import { Building2 } from "lucide-react";
import CompanyCard from "../components/CompanyCard";
import CompanyCardSkeleton from "../components/CompanyCardSkeleton";
import Filters from "../components/Filters";
import SortMenu from "../components/SortMenu";
import Pagination from "../components/Pagination";
import SkeletonHeader from "../components/SkeletonHeader";
import useCompanies from "../hooks/useCompanies";
import useFilters from "../hooks/useFilters";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const { companies, loading, error } = useCompanies();

  const {
    search, setSearch,
    location, setLocation,
    industry, setIndustry,
    sortOption, setSortOption,   
    filtered
  } = useFilters(companies);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Reset page when ANY filter or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, location, industry, sortOption]); 

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Loading state
  if (loading) {
    return (
      <div className="p-6 space-y-6">
        <SkeletonHeader />

        <div className="bg-white p-4 rounded-xl shadow-sm border space-y-3">
          <Filters
            search=""
            location=""
            industry=""
            setSearch={() => {}}
            setLocation={() => {}}
            setIndustry={() => {}}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CompanyCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-6">
        <ErrorMessage 
          message={error}
          onRetry={fetchCompanies}
        />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <Header />

     
<div className="bg-white p-4 rounded-xl shadow-sm border">

  {/* Single row layout for filters + sort */}
  <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3">

    {/* Search + City + Industry*/}
    <div className="md:col-span-3 lg:col-span-4">
      <Filters
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        industry={industry}
        setIndustry={setIndustry}
      />
    </div>

    {/* Sort menu on the right */}
    <div className="md:col-span-1 lg:col-span-1 flex items-center">
      <SortMenu value={sortOption} onChange={setSortOption} />
    </div>

  </div>
</div>

      {/* Grid or Empty State */}
      <div className="min-h-[200px]">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500 flex flex-col items-center">
            <span className="text-5xl mb-3">🔍</span>
            <p className="text-lg font-medium">No companies match your filters</p>
            <p className="text-sm text-gray-400">
              Try changing search, location, or industry filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

// Header Component
function Header() {
  return (
    <div className="mb-4 rounded-xl p-8 bg-gradient-to-r from-green-50 to-green-100">
      <h1 className="text-3xl font-bold flex items-center gap-3">
        <Building2 className="text-green-500 w-10 h-10" />
        Companies Directory
      </h1>

      <p className="text-gray-600 mt-1">
        Search, filter, and explore 50 companies
      </p>
    </div>
  );
}
