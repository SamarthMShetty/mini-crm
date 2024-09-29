/* mini-crm/pages/view-companies.js */
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const ViewCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await fetch('/api/companies');
      const data = await response.json();
      setCompanies(data);
    };

    fetchCompanies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Companies</h1>
      <ul className={styles.list}>
        {companies.length > 0 ? (
          companies.map((company) => (
            <li key={company._id} className={styles.listItem}>
              <h2>{company.name}</h2>
              <p>Industry: {company.industry}</p>
              <p>Description: {company.description}</p>
              <p>Created At: {new Date(company.createdAt).toLocaleDateString()}</p>
            </li>
          ))
        ) : (
          <p>No companies found</p>
        )}
      </ul>
    </div>
  );
};

export default ViewCompanies;
