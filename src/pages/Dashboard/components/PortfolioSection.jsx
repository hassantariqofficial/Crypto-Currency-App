import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="#fff"
      borderRadius="xl"
      p="24px"
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: "0",
          xl: "16",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack color="#222">
            <Text fontSize="14px" fontWeight="600">
              Total Portfolio Value
            </Text>
            <Icon as={IoMdInformationCircle} />
          </HStack>
          <Text fontSize="24px" fontWeight="600">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="#222">
            <Text fontSize="14px" fontWeight="600">
              Wallet Balances
            </Text>
          </HStack>

          <HStack
            flexDir={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              xl: "center",
            }}
            spacing={{ base: "4", xl: "16" }}
          >
            <HStack>
              <Text fontSize="24px" fontWeight="600">
                22.39401000
              </Text>
              <Tag bg="#01204E" color="#fff">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text fontSize="24px" fontWeight="600">
                ₹ 1,300.00
              </Text>
              <Tag bg="#01204E" color="#fff">
                INR
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button
          _hover={{
            bg: "#3C5B6F",
          }}
          bg="#01204E"
          color="#fff"
          leftIcon={<Icon as={FaArrowAltCircleDown} />}
        >
          Deposit
        </Button>
        <Button
          _hover={{
            bg: "#3C5B6F",
          }}
          bg="#01204E"
          color="#fff"
          leftIcon={<Icon as={FaArrowAltCircleUp} />}
        >
          {" "}
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
