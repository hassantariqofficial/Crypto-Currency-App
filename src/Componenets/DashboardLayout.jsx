import React from "react";
import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";
import { useBreakpointValue } from "@chakra-ui/react";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const containerPadding = useBreakpointValue({
    base: "16px",
    md: "32px",
    lg: "64px",
  });

  return (
    <Flex
      bg="#F1F1F7"
      minH="100vh"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box
        display={{
          base: "none",
          lg: "block",
        }}
        width={{ lg: "250px" }}
      >
        <Sidebar />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          mt={6}
          maxW="100%"
          mx="auto"
          px={containerPadding}
          overflowX="hidden"
          overflowY="auto"
          height={{ base: "calc(100vh - 88px)", lg: "calc(100vh - 88px)" }}
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
