import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, HStack, Icon, Stack, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Sidebar = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactionPage",
    },
  ];

  return (
    <Stack
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      bg="#fff"
      width={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading
          color="#647C90"
          textAlign="center"
          fontSize="20px"
          as="h1"
          pt="56px"
        >
          Hywiz Technologies
        </Heading>
        <Box mt="24px" mx="12px">
          {navLinks.map((nav) => (
            <RouterLink to={nav.link} key={nav.text}>
              <HStack
                py="12px"
                px="24px"
                _hover={{
                  bg: "#01204E",
                  color: "#fff",
                }}
                borderRadius="10px"
              >
                <Icon color="#647C90" as={nav.icon} />
                <Text fontSize="14px" fontWeight="bold">
                  {nav.text}
                </Text>
              </HStack>
            </RouterLink>
          ))}
        </Box>
      </Box>

      <Box mt="24px" mx="12px" mb="24px">
        <RouterLink to="/support">
          <HStack
            py="12px"
            px="24px"
            _hover={{
              bg: "#01204E",
              color: "#fff",
            }}
            borderRadius="10px"
          >
            <Icon color="#647C90" as={BiSupport} />
            <Text fontSize="14px" fontWeight="bold">
              Support
            </Text>
          </HStack>
        </RouterLink>
      </Box>
    </Stack>
  );
};

export default Sidebar;
