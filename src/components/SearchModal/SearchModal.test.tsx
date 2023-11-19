import React from "react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import SearchModal from "./SearchModal";

describe("SearchModal", () => {
  it("should render without issues", () => {
    renderWithProviders(<SearchModal />);
    expect(document.querySelector(".ReactModalPortal")).toBeInTheDocument();
  });
});