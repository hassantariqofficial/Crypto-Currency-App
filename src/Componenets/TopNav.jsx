import {
  Flex,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";

import { FaBars, FaUserTie } from "react-icons/fa6";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="70px" bg="#01204E" color="#fff">
      <HStack
        h="64px"
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxW="70rem"
      >
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="28px" color="#fff">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon color="#fff" fontSize="28px" as={FaUserTie} />
          </MenuButton>
          <MenuList>
            <MenuItem
              color="#222"
              _hover={{
                bg: "#01204E",
                color: "#fff",
              }}
            >
              Log Out
            </MenuItem>
            <MenuItem
              color="#222"
              _hover={{
                bg: "#01204E",
                color: "#fff",
              }}
            >
              Support
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
