import React from "react";
import SearchModal from "./SearchModal";
import { renderWithProviders } from "../../testUtils/renderWithProviders";

describe("SearchModal", () => {
    it("should render without errors", () => {
        renderWithProviders(<SearchModal />);

        expect(document.querySelector(".ReactModalPortal")).toBeInTheDocument();
    });
});