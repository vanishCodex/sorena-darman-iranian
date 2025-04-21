import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/requests')
      .then(res => res.json())
      .then(data => setRequests(data.reverse()))
      .catch(err => console.error('خطا در دریافت درخواست‌ها:', err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📋 داشبورد درخواست‌ها</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-right">نام</th>
              <th className="px-4 py-2 text-right">شماره</th>
              <th className="px-4 py-2 text-right">توضیحات</th>
              <th className="px-4 py-2 text-right">زمان</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-2">{req.name}</td>
                <td className="px-4 py-2">{req.phone}</td>
                <td className="px-4 py-2">{req.description || '—'}</td>
                <td className="px-4 py-2">{new Date(req.date).toLocaleString('fa-IR')}</td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4">درخواستی ثبت نشده است.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
