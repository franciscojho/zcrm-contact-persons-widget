import { useContext } from "react";
import { AdapterContext } from "../context/AdapterProvider";

export const useZohoAdapter = () => {
  const adapter = useContext(AdapterContext);
  if (!adapter) {
    throw new Error('useZohoAdapter must be used within AdapterProvider');
  }
  return adapter;
};