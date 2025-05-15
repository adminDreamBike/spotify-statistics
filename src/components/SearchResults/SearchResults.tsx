import { useCategories } from "@/lib/queries/categories";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@/lib/queries/search";
import { SearchType } from "@/api/types";
import { SpotifyCard } from "../../components/SpotifyCard/SpotifyCard";
import { useEffect } from "react";
import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { Category } from "@/components/Category/Category";

const SearchItem = ({ q }: { q: any }) => {
  const { search = {}, refetch } = useSearch({
    q: q,
    type: SearchType.Artist,
  });
  useEffect(() => {
    if (q) {
      refetch();
    }
  }, [q, refetch]);
  const { items } = search;
  return (
    <Flex flexWrap="wrap" gap="100px">
      {items?.map((item: any) => {
        return <SpotifyCard key={item.id} item={item} rounded={true} />;
      })}
    </Flex>
  );
};

const SearchResults = () => {
  const searchParams = useSearchParams();
  const { categories = {}, isLoading, isError, error } = useCategories();
  const { items } = categories;
  const paramQ = searchParams.get("q") || "";

  return (
    <>
      {paramQ ? (
        <SearchItem q={paramQ} />
      ) : (
        <>
          {isLoading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
          {isError ? (
            <Text color="red">{`Error loading categories: ${error?.message}`}</Text>
          ) : (
            <Flex flexDirection="column" gap="20px" margin="20px">
              <Heading size="lg" color="white">
                Browse All
              </Heading>
              <Flex flexWrap="wrap" gap="20px">
                {items?.map((item: any) => {
                  return <Category key={item.id} item={item} />;
                })}
              </Flex>
            </Flex>
          )}
        </>
      )}
    </>
  );
};

export default SearchResults;
