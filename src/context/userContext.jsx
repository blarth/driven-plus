import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const persistedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(persistedUser);
  function signUser(userData) {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }
  return (
    <UserContext.Provider value={{ user, signUser, persistedUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
