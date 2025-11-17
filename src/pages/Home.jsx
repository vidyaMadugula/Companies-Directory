import { useEffect, useState } from "react";
import { Building2, LayoutGrid, LayoutList } from "lucide-react";

import CompanyCard from "../components/CompanyCard";
import CompanyCardSkeleton from "../components/CompanyCardSkeleton";
import Filters from "../components/Filters";
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
    filtered
  } = useFilters(companies);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, location, industry]);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Loading state
  if (loading) {
    return (
      <div className="p-6">
        <SkeletonHeader />
        <Filters search="" location="" industry=""
          setSearch={() => {}} setLocation={() => {}} setIndustry={() => {}} 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
      <Header />

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <Filters
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          industry={industry}
          setIndustry={setIndustry}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
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

// Header
function Header() {
  return (
    <div>
      <h1 className="text-3xl font-bold flex items-center gap-3">
        <Building2 className="text-blue-600 w-10 h-10" />
        Companies Directory
      </h1>
      <p className="text-gray-600">Search, filter, and explore 50 companies</p>
    </div>
  );
}
