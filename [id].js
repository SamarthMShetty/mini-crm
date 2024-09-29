/* mini-crm/pages/api/companies/[id].js */
import connectDB from '../../../lib/mongodb';
import Company from '../../../models/Company';

export default async function handler(req, res) {
  await connectDB();
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const company = await Company.findById(id);
      if (!company) {
        return res.status(404).json({ error: 'Company not found' });
      }
      res.status(200).json(company);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch company' });
    }
  }
}
