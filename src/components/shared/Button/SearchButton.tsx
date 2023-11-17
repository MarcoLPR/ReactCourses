import React from "react";
import { useSearchStore } from "../../../store/useSearchStore";

export const SearchButton = () => {
  const openModal = useSearchStore((state) => state.openModal);
  return <button onClick={openModal}>Search</button>;
};
