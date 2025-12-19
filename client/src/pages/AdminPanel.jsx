import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  
  const [project, setProject] = useState({ name: '', description: '', imageUrl: '' });
  const [client, setClient] = useState({ name: '', description: '', designation: '', imageUrl: '' });
  
  
  const [contacts, setContacts] = useState([]);
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const contactRes = await axios.get('http://localhost:5000/api/admin/contacts');
    const subRes = await axios.get('http://localhost:5000/api/admin/subscribers');
    setContacts(contactRes.data);
    setSubs(subRes.data);
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/admin/projects', project);
    alert('Project Added');
    setProject({ name: '', description: '', imageUrl: '' });
  };

  const handleAddClient = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/admin/clients', client);
    alert('Client Added');
    setClient({ name: '', description: '', designation: '', imageUrl: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project Management */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Add Project</h2>
          <form onSubmit={handleAddProject} className="flex flex-col gap-3">
            <input placeholder="Project Name" className="border p-2 rounded" value={project.name} onChange={e => setProject({...project, name: e.target.value})} />
            <textarea placeholder="Description" className="border p-2 rounded" value={project.description} onChange={e => setProject({...project, description: e.target.value})} />
            <input placeholder="Image URL" className="border p-2 rounded" value={project.imageUrl} onChange={e => setProject({...project, imageUrl: e.target.value})} />
            <button className="bg-blue-600 text-white py-2 rounded">Add Project</button>
          </form>
        </div>

        {/* Client Management */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Add Client</h2>
          <form onSubmit={handleAddClient} className="flex flex-col gap-3">
            <input placeholder="Client Name" className="border p-2 rounded" value={client.name} onChange={e => setClient({...client, name: e.target.value})} />
            <input placeholder="Designation" className="border p-2 rounded" value={client.designation} onChange={e => setClient({...client, designation: e.target.value})} />
            <textarea placeholder="Review/Description" className="border p-2 rounded" value={client.description} onChange={e => setClient({...client, description: e.target.value})} />
            <input placeholder="Image URL" className="border p-2 rounded" value={client.imageUrl} onChange={e => setClient({...client, imageUrl: e.target.value})} />
            <button className="bg-blue-600 text-white py-2 rounded">Add Client</button>
          </form>
        </div>

        {/* View Contact Forms */}
        <div className="bg-white p-6 rounded shadow col-span-1 md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Contact Form Responses</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Mobile</th>
                  <th className="p-2 text-left">City</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(c => (
                  <tr key={c._id} className="border-b">
                    <td className="p-2">{c.fullName}</td>
                    <td className="p-2">{c.email}</td>
                    <td className="p-2">{c.mobile}</td>
                    <td className="p-2">{c.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* View Subscribers */}
        <div className="bg-white p-6 rounded shadow col-span-1 md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Newsletter Subscribers</h2>
          <ul className="list-disc pl-5">
            {subs.map(s => <li key={s._id}>{s.email} (Joined: {new Date(s.date).toLocaleDateString()})</li>)}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;