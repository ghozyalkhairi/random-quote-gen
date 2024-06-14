import MainLayout from "@/components/layout/MainLayout";
import { Text, Image, Box, Center } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getImageURL, getQuote } from "@/lib/api";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import RefreshIcon from "@/assets/icons/RefreshIcon";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import TagItem from "@/components/shared/TagItem";
import { useToPng } from "@hugocxl/react-to-image";

export default function Home() {
  const [_, convert, ref] = useToPng<HTMLDivElement>({
    quality: 0.8,
    selector: ".quote-container",
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.href = data;
      link.download = "quote.png";
      link.click();
    },
  });

  const [tag, setTag] = useState<string>("life");

  const tags = [
    "life",
    "happiness",
    "success",
    "love",
    "relationship",
    "technology",
  ];

  const {
    data: imgURL,
    isFetching: isFetchingIMG,
    refetch: refetchIMG,
    isRefetching: isRefetchingIMG,
  } = useQuery({
    queryKey: ["imageURL"],
    queryFn: getImageURL,
  });
  const {
    data: quote,
    isFetching: isFetchingQuote,
    refetch: refetchQuote,
    isRefetching: isRefetchingQuote,
  } = useQuery({
    queryKey: ["quote"],
    queryFn: () => getQuote(tag),
  });

  const handleRefresh = () => {
    refetchIMG();
    refetchQuote();
  };

  return (
    <MainLayout>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold">
        Random Quote Gen 💬
      </Text>

      {isFetchingIMG ||
      isFetchingQuote ||
      isRefetchingIMG ||
      isRefetchingQuote ? (
        <Center w="100%" h="100%">
          <Spinner size="xl" mx="auto" mt={10} />
        </Center>
      ) : (
        <Box
          w="100%"
          textAlign="center"
          position="relative"
          shadow="md"
          borderRadius="md"
          className="quote-container"
        >
          <Image
            src={imgURL as string}
            alt="Random Image"
            w="100%"
            mx="auto"
            my={6}
            borderRadius="md"
            filter="brightness(0.5)"
          />
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            color="white"
          >
            {quote?.content}
          </Text>

          <Text
            position="absolute"
            bottom="4"
            right="4"
            fontSize={{
              base: "sm",
              md: "md",
            }}
            color="white"
          >
            - {quote?.author}
          </Text>

          <Box
            position="absolute"
            bottom="4"
            left="4"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={10}
          >
            <Box onClick={handleRefresh} cursor="pointer">
              <RefreshIcon
                width="40"
                height="40"
                color="white"
                strokeWidth="4"
              />
            </Box>
            <Box onClick={convert} cursor="pointer">
              <DownloadIcon
                width="40"
                height="40"
                color="white"
                strokeWidth="4"
              />
            </Box>
          </Box>
        </Box>
      )}
      <Box textAlign="center" my={10} display="flex" gap="4" flexWrap="wrap">
        {tags.map((tagItem) => (
          <TagItem
            key={tagItem}
            tag={tagItem}
            isActivated={tag === tagItem}
            onClick={() => {
              setTag(tagItem);
              handleRefresh();
            }}
          />
        ))}
      </Box>

      <Box bg="#CAD5E2" p={4} borderRadius="md" textAlign="center">
        <Text fontSize="md">Made with ❤️ by Ghozy Alkhairi</Text>
      </Box>
    </MainLayout>
  );
}
