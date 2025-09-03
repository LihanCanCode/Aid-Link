import React, { useEffect, useState } from 'react';

export default function ReviewOrganizations() {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://aid-link-11.onrender.com/api/admin/pending-organizations')
      .then(res => res.json())
      .then(data => {
        setOrgs(data);
        setLoading(false);
      });
  }, []);

  const approveOrg = async (id) => {
    await fetch(`https://aid-link-11.onrender.com/api/admin/approve-organization/${id}`, { method: 'POST' });
    setOrgs(orgs.filter(org => org.id !== id));
  };

  if (loading) return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7f7f7' }}>
      <div style={{ textAlign: 'center', color: '#1976d2', fontWeight: 600, fontSize: 22 }}>Loading pending organizations...</div>
    </div>
  );

  return (
    <div style={{ minHeight: '80vh', background: 'linear-gradient(120deg, #e3f2fd 0%, #f7f7f7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', padding: 40, borderRadius: 16, boxShadow: '0 4px 24px #0002', minWidth: 380, maxWidth: 600, width: '100%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 32, color: '#1976d2', fontWeight: 700, fontSize: 28 }}>Pending Organizations</h2>
        {orgs.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#888', fontSize: 18 }}>No pending organizations.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {orgs.map(org => (
              <li key={org.id} style={{
                background: '#f5f5f5',
                borderRadius: 10,
                marginBottom: 18,
                padding: 24,
                boxShadow: '0 2px 8px #0001',
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}>
                <div style={{ fontWeight: 600, fontSize: 20, color: '#1976d2' }}>{org.name}</div>
                <div style={{ color: '#555', fontSize: 16 }}>{org.email}</div>
                <div style={{ color: '#333', fontSize: 15 }}>{org.description}</div>
                <button
                  onClick={() => approveOrg(org.id)}
                  style={{
                    marginTop: 10,
                    padding: '10px 0',
                    borderRadius: 6,
                    background: 'linear-gradient(90deg, #1976d2 60%, #43a047 100%)',
                    color: '#fff',
                    border: 'none',
                    fontWeight: 'bold',
                    fontSize: 16,
                    boxShadow: '0 1px 4px #0001',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  Approve
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}