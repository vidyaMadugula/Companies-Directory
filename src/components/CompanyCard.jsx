import { HiOutlineMapPin } from "react-icons/hi2";
import { FiUsers, FiCalendar } from "react-icons/fi";

export default function CompanyCard({ company }) {
  return (
    <div
      className="
        bg-white p-6 rounded-xl border border-gray-200
        shadow-sm transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        hover:border-green-600 hover:border-2
        group
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2
          className="
            text-xl font-semibold text-gray-800
            transition-colors duration-300
            group-hover:text-green-600
          "
        >
          {company.name}
        </h2>
      </div>

      {/* Industry Badge */}
      <div className="mt-3">
        <span className="px-3 py-2 text-s font-medium bg-gray-100 text-green-600 rounded-full">
          {company.industry}
        </span>
      </div>

      {/* Description */}
      {company.description && (
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          {company.description}
        </p>
      )}

      {/* Info Section */}
      <div className="mt-4 space-y-3 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <HiOutlineMapPin className="text-gray-500 text-lg" />
          <p>{company.location}</p>
        </div>

        <div className="flex items-center gap-2">
          <FiUsers className="text-gray-500 text-lg" />
          <p>{company.employees} employees</p>
        </div>

        <div className="flex items-center gap-2">
          <FiCalendar className="text-gray-500 text-lg" />
          <p>Founded {company.founded}</p>
        </div>
      </div>
    </div>
  );
}
