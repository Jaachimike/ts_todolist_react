import React from "react";
import {UserProvider} from "./contexts/UserContext";
import AppRoutes from "./routes/routes";

const App: React.FC = () => {
  return (
    <>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </>
  );
};

export default App;
