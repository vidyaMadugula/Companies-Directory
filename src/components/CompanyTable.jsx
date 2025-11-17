export default function CompanyTable({ data }) {
  return (
    <div className="overflow-x-auto bg-white border rounded-xl shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">Company Name</th>
            <th className="p-3">Industry</th>
            <th className="p-3">Location</th>
            <th className="p-3">Founded</th>
            <th className="p-3">Employees</th>
            <th className="p-3">Website</th>
          </tr>
        </thead>

        <tbody>
          {data.map((c) => (
            <tr key={c.id} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{c.name}</td>
              <td className="p-3">{c.industry}</td>
              <td className="p-3">{c.location}</td>
              <td className="p-3">{c.founded}</td>
              <td className="p-3">{c.employees}</td>
              <td className="p-3">
                <a href="#" className="text-blue-600">Visit ↗</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
