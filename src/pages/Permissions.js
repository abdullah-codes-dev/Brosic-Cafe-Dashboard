import React, { useState } from "react";

// Dummy roles data
const initialRoles = [
  {
    id: 1,
    name: "Abdullah Mustafa",
    email: "abdullah.mustafa@email.com",
    role: "Admin",
    isRoot: true,
  },
  {
    id: 2,
    name: "Sheharyar Mustafa",
    email: "sheharyar.mustafa@email.com",
    role: "Admin",
    isRoot: false,
  },
  {
    id: 3,
    name: "Ali Raza",
    email: "aliraza@email.com",
    role: "Editor",
    isRoot: false,
  },
  {
    id: 4,
    name: "Rehman Baryar",
    email: "rehman.baryar@email.com",
    role: "Editor",
    isRoot: false,
  },
];

const roleOptions = ["Admin", "Editor", "Viewer"];

export default function Permissions() {
  const [roles, setRoles] = useState(initialRoles);
  const [showModal, setShowModal] = useState(false);
  const [editRole, setEditRole] = useState(null);

  // Modal form state
  const [form, setForm] = useState({ name: "", email: "", role: "Admin" });

  // Open modal for Add or Edit
  const handleOpenModal = (role = null) => {
    if (role) {
      setEditRole(role.id);
      setForm({ name: role.name, email: role.email, role: role.role });
    } else {
      setEditRole(null);
      setForm({ name: "", email: "", role: "Admin" });
    }
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setForm({ name: "", email: "", role: "Admin" });
    setEditRole(null);
  };

  // Submit add/edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    if (editRole) {
      setRoles(roles.map((r) => (r.id === editRole ? { ...r, ...form } : r)));
    } else {
      setRoles([
        ...roles,
        {
          id: roles.length ? Math.max(...roles.map((r) => r.id)) + 1 : 1,
          ...form,
          isRoot: false,
        },
      ]);
    }
    handleCloseModal();
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this role?"))
      setRoles(roles.filter((r) => r.id !== id));
  };

  return (
    <div style={{ padding: 32, minHeight: "90vh", background: "#f8fafc" }}>
      <div
        style={{
          background: "#fff",
          padding: 28,
          borderRadius: 22,
          boxShadow: "0 2px 24px #e8eaef",
          position: "relative",
        }}
      >
        <h2 style={{ fontWeight: 600, fontSize: "1.4rem", marginBottom: 24 }}>
          All Roles
        </h2>
        {/* Add Role Button */}
        <button
          style={{
            position: "absolute",
            right: 32,
            top: 32,
            background: "#fff",
            border: "none",
            outline: "none",
            borderRadius: "12px",
            padding: "13px 36px",
            fontWeight: 700,
            fontSize: 18,
            color: "#ff4500",
            boxShadow: "0 0 20px 4px #ff6c02,0 0 80px 10px #ffd02f",
            cursor: "pointer",
            zIndex: 5,
            animation: "firepulse 1.5s infinite alternate",
            letterSpacing: 1,
          }}
          onClick={() => handleOpenModal(null)}
        >
          🔥 Add Role
        </button>
        {/* Fire Pulse Animation */}
        <style>
          {`
          @keyframes firepulse {
            0% { box-shadow: 0 0 20px 4px #ff6c02,0 0 80px 10px #ffd02f; }
            50% { box-shadow: 0 0 34px 11px #ff9533, 0 0 105px 21px #ffe24c; }
            100% { box-shadow: 0 0 18px 3px #ff6c02,0 0 60px 6px #ffd02f; }
          }
          `}
        </style>
        {/* Roles Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "1rem",
              background: "#fff",
            }}
          >
            <thead>
              <tr style={{ background: "#f5f5fc" }}>
                <th style={tdHead}>No</th>
                <th style={tdHead}>Name</th>
                <th style={tdHead}>Email</th>
                <th style={tdHead}>Role</th>
                <th style={tdHead}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((r, idx) => (
                <tr key={r.id}>
                  <td style={tdCell}>{idx + 1}</td>
                  <td style={tdCell}>{r.name}</td>
                  <td style={tdCell}>{r.email}</td>
                  <td style={tdCell}>
                    <span style={roleTag}>{r.role}</span>
                    {r.isRoot && <span style={rootTag}>Root</span>}
                  </td>
                  <td style={tdCell}>
                    <button style={editBtn} onClick={() => handleOpenModal(r)}>
                      Edit
                    </button>
                    <button
                      style={deleteBtn}
                      onClick={() => handleDelete(r.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 22 }}
        >
          <button
            style={{
              border: "none",
              borderRadius: 18,
              background: "#ffe96a",
              color: "#222",
              padding: "6px 20px",
              fontWeight: 600,
              fontSize: 17,
              boxShadow: "0 1px 7px #f7d857",
              marginRight: 12,
              cursor: "pointer",
              minWidth: 45,
            }}
          >
            1
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(50,54,59,0.19)",
            zIndex: 99,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#fff",
              borderRadius: 22,
              padding: "32px 36px 30px 36px",
              boxShadow: "0 4px 48px #f9e6cb",
              minWidth: 340,
              width: "90%",
              maxWidth: 390,
            }}
          >
            <h3
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "1.18rem",
                marginBottom: 22,
              }}
            >
              {editRole ? "Edit Role" : "Add Role"}
            </h3>
            <div style={{ marginBottom: 17 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>
                Name:
                <input
                  type="text"
                  value={form.name}
                  autoFocus
                  required
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  style={inputStyle}
                  placeholder="Full Name"
                />
              </label>
            </div>
            <div style={{ marginBottom: 17 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>
                Email:
                <input
                  type="email"
                  value={form.email}
                  required
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  style={inputStyle}
                  placeholder="Email"
                />
              </label>
            </div>
            <div style={{ marginBottom: 19 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>
                Role:
                <select
                  value={form.role}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, role: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    padding: 11,
                    marginTop: 7,
                    borderRadius: 8,
                    border: "1.2px solid #ffd04c",
                    background: "#fafbf9",
                    fontSize: 15,
                  }}
                >
                  {roleOptions.map((opt) => (
                    <option value={opt} key={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div style={{ textAlign: "right" }}>
              <button
                type="button"
                style={{
                  background: "#f4f3f3",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 28px",
                  marginRight: 13,
                  fontWeight: 600,
                  color: "#e13030",
                  fontSize: 16,
                  cursor: "pointer",
                }}
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  background: "#ff8d05",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 28px",
                  fontWeight: 600,
                  color: "#fff",
                  fontSize: 16,
                  cursor: "pointer",
                  boxShadow: "0 1px 12px #ffe0ba",
                  letterSpacing: 1,
                }}
              >
                {editRole ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

// Table and UI styles
const tdHead = {
  fontWeight: 600,
  padding: "12px 10px",
  background: "#f5f5fc",
  borderBottom: "2px solid #f2f3f6",
};
const tdCell = {
  padding: "12px 8px",
  borderBottom: "1.5px solid #f3f4f7",
  textAlign: "center",
};
const roleTag = {
  display: "inline-block",
  background: "#f6f7ff",
  color: "#556ee6",
  borderRadius: 10,
  fontSize: 13,
  padding: "5px 12px",
  fontWeight: 600,
  marginRight: 8,
};
const rootTag = {
  display: "inline-block",
  background: "#ffefef",
  color: "#ff3232",
  borderRadius: 9,
  fontSize: 13,
  padding: "4px 11px",
  fontWeight: 700,
  marginLeft: 2,
};
const editBtn = {
  background: "#fffbe0",
  border: "1.5px solid #ffcb38",
  borderRadius: "7px",
  color: "#e6aa00",
  padding: "5px 19px",
  marginRight: 7,
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 14,
  transition: "all 0.17s",
};
const deleteBtn = {
  background: "#fff",
  border: "1.5px solid #ff7878",
  borderRadius: "7px",
  color: "#ff3030",
  padding: "5px 19px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 14,
  transition: "all 0.17s",
};
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: 7,
  borderRadius: 8,
  border: "1.2px solid #ffd04c",
  background: "#fafbf9",
  fontSize: 15,
};
