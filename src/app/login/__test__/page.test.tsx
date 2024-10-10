import { render, screen } from "@testing-library/react";
import Page from "../page";
import { vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("next/navigation", async () => ({
  ...(await import("next-router-mock")),
  useRouter: () => vi.fn(),
}));

vi.mock("../../useLogin", () => ({
  queryFn: () => vi.fn(),
}));

test("Page", () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <Page />
    </QueryClientProvider>
  );
  expect(screen.getAllByRole("textbox")).toHaveLength(2);
});
