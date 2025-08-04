import React, { useEffect, useState } from "react";
import { fetchUsers, createUser, updateUser, deleteUser } from "./api/api";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ user_id: null, username: "", email: "" });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await updateUser(form);
      setIsEdit(false);
    } else {
      await createUser(form);
    }

    setForm({ user_id: null, username: "", email: "" });
    loadUsers();
  };

  const handleEdit = (user) => {
    setForm(user);
    setIsEdit(true);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div>
      <h1>User Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">{isEdit ? "Update User" : "Add User"}</button>
        {isEdit && (
          <button
            type="button"
            onClick={() => {
              setForm({ user_id: null, username: "", email: "" });
              setIsEdit(false);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <ul>
        {users.map((u) => (
          <li key={u.user_id}>
            {u.username} ({u.email})
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u.user_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
