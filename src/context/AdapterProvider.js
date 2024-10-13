import { createContext } from "react";
import { createZohoService } from "../services/createZohoService";

export const AdapterContext = createContext();

export const AdapterProvider = ({ children }) => {
  const zohoAdapter = createZohoService();
  return (
    <AdapterContext.Provider value={zohoAdapter}>
      {children}
    </AdapterContext.Provider>
  );
};
