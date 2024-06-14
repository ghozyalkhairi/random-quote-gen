import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  tag: string;
  isActivated?: boolean;
  onClick?: () => void;
}

const TagItem: FC<Props> = ({ tag, isActivated, onClick }) => {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      textAlign="center"
      bg={isActivated ? "blue.500" : "gray.200"}
      color={isActivated ? "white" : "gray.800"}
      p="2"
      borderRadius="8"
    >
      <Text fontSize="medium" fontWeight="bold">
        {tag}
      </Text>
    </Box>
  );
};

export default TagItem;
