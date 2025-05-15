"use client";

import SearchResults from "@/components/SearchResults/SearchResults";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
