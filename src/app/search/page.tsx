"use client";

import { Category } from "@/components/Category/Category";
import { Flex, Heading } from "@chakra-ui/react";
import { useCategories } from "../../lib/queries/categories";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@/lib/queries/search";
import { SearchType } from "@/api/types";
import { SpotifyCard } from "../../components/SpotifyCard/SpotifyCard";

const SearchItem = ({ q }) => {
  const { search = {}, refetch } = useSearch({
    q: q,
    type: SearchType.Artist,
  });
  const { items } = search;
  return (
    <Flex flexWrap="wrap" gap="100px">
      {items?.map((item) => {
        return <SpotifyCard key={item.id} item={item} rounded={true} />;
      })}
    </Flex>
  );
};
export default function Page() {
  const searchParams = useSearchParams();

  const { categories = {}, isLoading, isError } = useCategories();

  const { items } = categories;

  const paramQ = searchParams.get("q") || "";

  return (
    <>
      {paramQ ? (
        <SearchItem q={paramQ} />
      ) : (
        <Flex flexDirection="column" gap="20px" margin="20px">
          <Heading size="lg" color="white">
            Browse All
          </Heading>
          <Flex flexWrap="wrap" gap="20px">
            {items?.map((item) => {
              return <Category key={item.id} item={item} />;
            })}
          </Flex>
        </Flex>
      )}
    </>
  );
}
