import {createContext, useContext, useState, ReactNode} from "react";

// Define the shape of the context state
interface UserContextType {
  username: string;
  setUsername: (name: string) => void;
}

// Create the context with a default value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({children}: UserProviderProps) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{username, setUsername}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
