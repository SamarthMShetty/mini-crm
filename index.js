/* mini-crm/pages/index.js */

import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleCreateCompany = () => {
    router.push('/create-company');
  };

  const handleViewCompanies = () => {
    router.push('/view-companies');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Mini CRM</h1>
      <div className={styles.buttonContainer}>
        <button onClick={handleCreateCompany} className={styles.button}>
          Create Company
        </button>
        <button onClick={handleViewCompanies} className={styles.button}>
          View All Companies
        </button>
      </div>
    </div>
  );
}

