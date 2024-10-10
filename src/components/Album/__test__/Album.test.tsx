import { render, screen } from "@testing-library/react";
import { Album } from "../Album";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";

describe("Album", () => {
  vi.mock("../../lib/queries/album", () => ({
    newReleases: () => ({
      albums: () => ({
        items: () => [
          {
            id: 1,
            images: [{ url: "url image" }],
            name: "test",
            artists: [
              {
                name: "artist 1",
              },
            ],
          },
        ],
      }),
    }),
  }));
  test("should...", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Album />
      </QueryClientProvider>
    );
  });

  screen.debug();
});
