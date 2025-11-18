export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-3 mt-8">

      {/* Prev Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 border rounded-lg disabled:opacity-50 bg-white hover:bg-gray-100"
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {pages.map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`px-3 py-1 border rounded-lg 
            ${currentPage === num ? "bg-green-500 text-white" : "bg-white hover:bg-gray-100"}`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 border rounded-lg disabled:opacity-50 bg-white hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
}
