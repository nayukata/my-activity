import {
  Box,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
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

export const ProjectView = ({ project }: ProjectProps) => {
  return (
    <Card
      m={6}
      p={20}
      h={550}
      w={400}
      backgroundColor={colors.background.card}
      borderRadius={8}
    >
      <CardBody>
        <Text as="h2" my={20}>
          {project.name}
        </Text>
        <Stack
          divider={<StackDivider borderColor={colors.border} />}
          spacing="4"
        >
          <FlexCol h={200}>
            <Summary>概要</Summary>
            <Text pl={12} whiteSpace="pre-wrap" noOfLines={6}>
              {project.description}
            </Text>
          </FlexCol>
          <FlexCol gap={2} pl={2} h={250}>
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
        </Stack>
      </CardBody>
    </Card>
  );
};
