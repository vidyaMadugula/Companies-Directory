export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="bg-red-50 border border-red-300 text-red-700 p-4 rounded-lg shadow-sm text-center space-y-3">

      <div className="text-lg font-semibold">
        ⚠️ Something went wrong
      </div>

      <p className="text-sm">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
}
