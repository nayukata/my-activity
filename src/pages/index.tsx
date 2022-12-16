import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";
import { FlexCol } from "src/components/chakra-ui/Box";
import { ProjectView } from "src/components/Project";
import { colors } from "src/constants/colors";
import { projects } from "src/constants/projects";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box px={4} py={8} borderColor={colors.border} borderBottom="1px solid">
      <Text as="h1" m={0}>
        {children}
      </Text>
    </Box>
  );
};

export default function Home() {
  return (
    <Container bg={colors.body} color={colors.font}>
      <Head>
        <title>My Activity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        h="10vh"
        alignItems="center"
        px="20px"
        boxShadow="base"
        position="sticky"
        top="0"
        zIndex="sticky"
        w="full"
        bg={colors.header}
      >
        <Text fontSize="xl" fontWeight="bold">
          開発履歴
        </Text>

        <Spacer />

        <Flex alignItems="center" color={colors.subFont}>
          <Text fontSize="md" mr="10">
            Nakayama
          </Text>
          <Text fontSize="md">Yutaro</Text>
        </Flex>
      </Flex>
      <FlexCol
        gap={10}
        h="90vh"
        py="40px"
        px="20px"
        bg={colors.body}
        overflowY="auto"
      >
        <FlexCol>
          <Text
            as="h1"
            py={4}
            borderColor={colors.border}
            borderBottom="1px solid"
          >
            Profile
          </Text>
          <Box pl={20}>
            <Text>所属：ニチコマ合同会社</Text>
            <Text>エンジニア歴: 2年8ヶ月</Text>
            <Text>{`得意な領域: フロントエンド(React / Next.js)`}</Text>
          </Box>
        </FlexCol>
        <FlexCol>
          <Heading>Developments</Heading>
          <Box pl={4}>
            {projects.map((project, index) => {
              return (
                <ProjectView
                  key={index}
                  project={project}
                  noBorder={index === projects.length - 1}
                />
              );
            })}
          </Box>
        </FlexCol>
      </FlexCol>
    </Container>
  );
}
