import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const testQueryClient = new QueryClient();

export const renderWithProviders = (children: React.ReactNode) =>
  render(
    <QueryClientProvider client={testQueryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
