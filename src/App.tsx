import React from "react";
import Providers from "./Providers";
import AppRoutes from "./routes";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SearchModal from "./components/SearchModal/SearchModal";

const App: React.FC = () => {
  return (
    <Providers>
      <NavigationBar />
      <div className="mt-5 mb-5 w-9/12 mx-auto">
        <AppRoutes />
      </div>
      <SearchModal />
    </Providers>
  );
};

export default App;
