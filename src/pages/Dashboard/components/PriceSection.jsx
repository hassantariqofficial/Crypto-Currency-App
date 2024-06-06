import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const PriceSection = () => {
  const timestamps = ["7:15 pm", "7:55 pm", "8:15 pm", "9:55 pm", "10:15 pm"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="#222">
            <Text fontSize="14px" fontWeight="600">
              Current Price{" "}
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
                ₹26,670.25{" "}
              </Text>
              <HStack fontWeight="bold" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="600">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button
            _hover={{
              bg: "#3C5B6F",
            }}
            bg="#01204E"
            color="#fff"
            leftIcon={<Icon as={FaCirclePlus} />}
          >
            Buy
          </Button>
          <Button
            _hover={{
              bg: "#3C5B6F",
            }}
            bg="#01204E"
            color="#fff"
            leftIcon={<Icon as={FaCircleMinus} />}
          >
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify="end">
          <TabList bg="#01204E" p="4px" gap="10px" borderRadius="4">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{
                  bg: "#fff",
                  color: "#222",
                }}
                key={tab}
                fontSize="sm"
                p="6px"
                color="white"
                borderRadius="2px"
              >
                {tab}
              </Tab>
            ))}
            ;
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="/Graph.svg" mt="1rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp}>{timestamp}</Text>
              ))}
              ;{" "}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
