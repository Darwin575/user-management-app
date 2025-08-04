const API_BASE = "http://localhost/preparation/backend/users";

export const fetchUsers = async () => {
  const res = await fetch(`${API_BASE}/read.php`);
  return res.json();
};

export const createUser = async (user) => {
  const res = await fetch(`${API_BASE}/create.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const updateUser = async (user) => {
  const res = await fetch(`${API_BASE}/update.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const deleteUser = async (user_id) => {
  const res = await fetch(`${API_BASE}/delete.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id }),
  });
  return res.json();
};
