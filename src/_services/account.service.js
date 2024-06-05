let saveToken = (token) => {
  localStorage.setItem("token", token);
};
let saveRole = (role) => {
  localStorage.setItem("role", role);
};

let saveUserName = (name) => {
  localStorage.setItem("name", name);
};

let logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

export const accountService = {
  saveToken,
  logout,
  isLogged,
  saveUserName,
  saveRole,
};
