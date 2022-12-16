import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FlexCol } from "src/components/chakra-ui/Box";
import { colors } from "src/constants/colors";
import type { Project } from "src/entities/Project";

type ProjectProps = {
  project: Project;
  imageProps?: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  noBorder?: boolean;
};

const Summary = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Text as="h3" m={0} fontSize={18}>
        {children}
      </Text>
    </Box>
  );
};

export const ProjectView = ({
  imageProps,
  noBorder,
  project,
}: ProjectProps) => {
  return (
    <FlexCol
      gap={20}
      px={20}
      pb={40}
      borderColor={colors.subBorder}
      borderBottom={noBorder ? "none" : "1px solid"}
    >
      <Text as="h2" mt={20} mb={8}>
        {project.name}
      </Text>
      <FlexCol gap={2} pl={2}>
        <Summary>概要</Summary>
        <Box py={8} pl={12}>
          <Text m={0} whiteSpace="pre-wrap">
            {project.description}
          </Text>
        </Box>
      </FlexCol>
      <FlexCol gap={2} pl={2}>
        <Summary>技術スタック</Summary>
        <FlexCol gap={6} py={8} pl={8}>
          {project.technologyStacks.map((technologyStack, index) => {
            return (
              <Text key={index} m={0}>
                ・{technologyStack}
              </Text>
            );
          })}
        </FlexCol>
      </FlexCol>
      {imageProps && (
        <Box>
          <>
            {
              // eslint-disable-next-line jsx-a11y/alt-text
              <Image {...imageProps} />
            }
          </>
        </Box>
      )}
    </FlexCol>
  );
};
