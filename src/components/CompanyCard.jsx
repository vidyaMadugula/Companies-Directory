export default function CompanyCard({ company }) {
  return (
    <div className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold">{company.name}</h2>
        <a href="#" className="text-blue-600 text-sm">↗</a>
      </div>

      <p className="text-gray-500 text-sm mt-1">{company.industry}</p>

      <div className="mt-3 space-y-2 text-sm text-gray-600">
        <p>📍 {company.location}</p>
        <p>📅 Founded in {company.founded}</p>
        <p>👥 {company.employees} employees</p>
      </div>
    </div>
  );
}
