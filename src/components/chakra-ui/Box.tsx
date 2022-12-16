import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const FlexCol = (props: FlexProps) => {
  return <Flex direction="column" {...props} />;
};
