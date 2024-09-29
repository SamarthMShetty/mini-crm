/* mini-crm/pages/companies/[id].js */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const CompanyDetail = () => {
  const [company, setCompany] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`/api/companies/${id}`)
        .then((res) => res.json())
        .then((data) => setCompany(data));
    }
  }, [id]);

  if (!company) return <p>Loading...</p>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>Industry: {company.industry}</p>
      <p>Description: {company.description}</p>
      <p>Created At: {new Date(company.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default CompanyDetail;
