import { useEffect, useState } from "react";

export default function useCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCompanies = () => {
    setLoading(true);
    setError("");

    fetch("/data/companies.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load companies");
        return res.json();
      })
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return { companies, loading, error, fetchCompanies };
}
