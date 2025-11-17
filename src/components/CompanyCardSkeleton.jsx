export default function CompanyCardSkeleton() {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white animate-pulse">
      <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>

      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>

      <hr className="my-3" />

      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/4"></div>
      </div>
    </div>
  );
}
