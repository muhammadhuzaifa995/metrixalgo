import React from 'react';

const customers = Array(10).fill({
  name: 'Janet Adebayo',
  email: 'example.a@mail.com',
  phone: '+12345678910',
  orders: 10,
  total: '₦250,000.00',
  joined: '12 Aug 2022 - 12:25 am',
  status: 'Active',
});

const CustomerTable = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Orders</th>
              <th className="px-4 py-3">Order Total</th>
              <th className="px-4 py-3">Customer Since</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">{customer.phone}</td>
                <td className="px-4 py-2">{customer.orders}</td>
                <td className="px-4 py-2">{customer.total}</td>
                <td className="px-4 py-2">{customer.joined}</td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center px-4 py-2 bg-gray-50 text-sm">
          <div>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>{' '}
            Items per page
          </div>
          <div>
            1–10 of 200 items
          </div>
          <div className="flex gap-2">
            <button className="px-2 py-1 text-gray-500 hover:text-black">&lt;</button>
            <span className="font-medium">1 of 44 pages</span>
            <button className="px-2 py-1 text-gray-500 hover:text-black">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
