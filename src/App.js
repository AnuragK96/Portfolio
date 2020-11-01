import React from "react";
import "./App.css";
import routes from "./routes/routes";
import AppShell from "./routes/AppShell";
import { Location } from "@reach/router";
export const ThemeContext = React.createContext(null);

function App() {
  return (
    <Location>
      {({ location }) => (
        <ThemeContext.Provider value={location.pathname}>
          <AppShell location={location}>{routes}</AppShell>
        </ThemeContext.Provider>
      )}
    </Location>
  );
}

export default App;
